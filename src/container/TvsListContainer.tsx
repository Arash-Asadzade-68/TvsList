import React ,{useReducer , useEffect ,useState} from "react";
import { sortBy} from "lodash";
import moment from "moment";
import {Dialog} from "@material-ui/core";
import {useCsvToJson} from "../hooks/useCsvToJson";
import {FilterItemsInitialState, screenTypes} from "../constants"
import { setFilterCount, setFilterState , setDialogState } from "../components/TVsListView/state/TVsList.action";
import { columns } from '../components/TVsListView/Columns';
import Filters from "../components/TVsListView/Filter/Filters"
import {ListHeaders} from "../components/TVsListView/ListHeaders";
import TVsListView from "../components/TVsListView";
import {TVsListActionBar} from "../components/TVsListView/TVsListActionBar";
import {TVsListReducer} from "../components/TVsListView/state/TVsList.reducer";
import Styles from "../assets/scss/styles.module.scss";
export enum SortType {
  Asc = 'Asc',
  Desc = "Desc"
}
const TvsListContainer = () =>{
  const {rows} = useCsvToJson();
  const [data, setData] = useState<ITVsListRow[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initalState: ITVsListState = {
    searchTerm: "",
    filterState: FilterItemsInitialState,
    filterCount: 0,
    searchState: { key: "seriesId", value: "Series" },
    isOpen:false
};
  const [state, dispatch] = useReducer(TVsListReducer, initalState);
  const { searchTerm, searchState , filterCount , filterState , isOpen}: ITVsListState = state;

  useEffect(() => {
     if(searchTerm.length>0){
       setData(data.filter(function(item) {
        return item[searchState.key].indexOf(searchTerm) > -1 }));
     }
     else {
      if(filterCount>0){
        applyFilters(filterState,filterCount)
       }
      else setData(rows)
    }
     // eslint-disable-next-line
  }, [searchTerm])
  useEffect(() => {
     if(rows.length>0){
       setData(rows);
       setIsLoading(false);
     }
     else setIsLoading(true);
  }, [rows])
  function sortList(fieldName:string , type:string){
    switch (type) {
      case SortType.Asc:
        setData(sortBy(data,fieldName));
        break;
      case SortType.Desc:
        setData((sortBy(data,fieldName)).reverse());
        break;
      default:
        break;
    }
    
  }
  function applyFilters(filters:IFilterState, filtersCount: number, filtersChanged: boolean = false) {
    if (filtersChanged) {
        dispatch(setFilterState(filters));
        dispatch(setFilterCount(filtersCount));
    }
    if(filters.screen){
      // eslint-disable-next-line
      const filteredData = rows.filter(listRow=>{
        for(let screenType in screenTypes){
          if(filters[screenType]){
            let search = screenType.toLowerCase();
            var values = Object.values(listRow);
            var flag = false
            // eslint-disable-next-line
            values.forEach((val) => {
              if(val.toLowerCase().indexOf(search) > -1) {
                  flag = true;
                  return;
              }
            })
            if(flag) return listRow
          }
        }
        
      })
      setData(filteredData);
    }
    else if(filters.date){
      setData(
        // eslint-disable-next-line
        rows.filter(listrow=>{
          if(moment(listrow.date).isBetween(filters.From, filters.To)) return listrow
        })
      )
    }
    if(filtersCount===0){
      setData(rows)
    }
}
  return <div key="TVsListContainer" className={Styles.TVsListContainer}>
  <TVsListActionBar  
      selectedFilterCount={filterCount} 
      filterState={filterState}
      dispatch={dispatch} 
      selectedSearchState={searchState} 
      canSearchItems={true}
  />
  <div key={"columnHeaders"} className={Styles.columnsHeader}>
      {columns.map((column) => <ListHeaders label={column.label} fieldName={column.key} sortList={sortList} key={`col-${column.key}-${column.label}`} />)}
  </div>
  <TVsListView columns={columns} TVsList={data} isLoading={isLoading} />
  <Dialog
      onBackdropClick={()=>dispatch(setDialogState(false))}
      open={isOpen}
      maxWidth={"md"}
      className={Styles.FiltersDialog}
      transitionDuration={300}
      data-testid="dialog-component"
    >
     <Filters selectedFitersCount={filterCount} filterItems={filterState} onCloseFiltersModal={()=>dispatch(setDialogState(false))}
      onApplyFilters={applyFilters}
     />
    </Dialog>
</div>
}
export default TvsListContainer;
  