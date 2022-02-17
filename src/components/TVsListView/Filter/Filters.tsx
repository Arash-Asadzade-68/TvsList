import React, {useState } from 'react';
import { Divider } from '@material-ui/core';
import {screenTypes , SelectedFiltersType , FilterItemsInitialState} from "../../../constants";
// import CloseIcon from '@material-ui/icons/Close';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import TableAreas from "./TableAreas"
import Styles from "../../../assets/scss/styles.module.scss";
interface IFiltersProps {
    onApplyFilters: (filters: IFilterState, filtersCount: number, filtersChanged: boolean) => void;
    onCloseFiltersModal: () => void;
    selectedFitersCount: number;
    filterItems: IFilterState;
}
function Filters({
    selectedFitersCount,
    onCloseFiltersModal,
    filterItems,
    onApplyFilters,
}: IFiltersProps) {
    const [filters, setFilters] = useState<IFilterState>(filterItems);
    const [filtersCount, setFiltersCount] = useState<number>(selectedFitersCount);
    function onFiltersChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilters({ ...filters, [event.target.name]: event.target.checked });
        if (event.target.checked) {
          setFiltersCount(preveState => ++preveState);
      } else {
          if (event.target.name === SelectedFiltersType.screen) {
              const newFiltersArray:IFilterState = {...filters};
              Object.keys(screenTypes).forEach(function (key) {
                  if (newFiltersArray[key]) { newFiltersArray[key] = false;};
              })
              setFiltersCount(0);
              setFilters({ ...newFiltersArray, [event.target.name]: event.target.checked });
          }
          else setFiltersCount(preveState => --preveState);
      }
    };
    function renderScreenTypes() {
      let temp:React.ReactNode[] = [];
      for(let screenType in screenTypes){
        temp.push (<FormControlLabel
        control={<Checkbox
            checked={filters[screenType] as boolean}
            onChange={onFiltersChange}
            name={screenType}
            color="primary"
        />}
        label={screenType}
        className={Styles.filtersCheckboxes}
    /> )
      }
     return temp;
    }
    function applyFilters() {
        onApplyFilters(filters, filtersCount, true);
        close();
    }
    function close() {
      onCloseFiltersModal();
    }
    function clearFilters() {
        setFilters(FilterItemsInitialState);
        setFiltersCount(0);
        onApplyFilters(FilterItemsInitialState,0, true);
    }
    function renderDateRange(){
        return(
            <>
            <div>
               <span>From</span>
               <input type="date" value={filters.From as string} onChange={(e)=>setFilters({...filters,From:e.target.value})}/>
            </div>
            <div>
                <span>To</span>
                <input type="date" value={filters.To as string} onChange={(e)=>setFilters({...filters,To:e.target.value})}/>
            </div>
            </>
        )
    }
    return (
        <div className={Styles.FiltersContainer}>
            <header>
                <div>
                    <p>Filters</p>
                    <button onClick={clearFilters}>clear</button>
                </div>
            </header>
            <Divider />
            <div className={Styles.filterOptions}>
                <div className={Styles.MainCatsSection}>
                    <p>Filter Fields</p>
                    <div>
                        <FormControlLabel
                            control={<Checkbox
                                checked={filters.screen}
                                onChange={onFiltersChange}
                                name={"screen"}
                                color="primary"
                                disabled={filters.date}
                            />}
                            label={"Screen"}
                            className={Styles.filtersCheckboxes}
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={filters.date}
                                onChange={onFiltersChange}
                                name={"date"}
                                color="primary"
                                disabled={filters.screen}
                            />}
                            label={"Date"}
                            className={Styles.filtersCheckboxes}
                        />
                    </div>
                </div>
                <Divider />
                {filters.screen && !filters.date && <div className={Styles.SubCatsSection}>
                    <p>screenTypes</p>
                    <div>
                        {renderScreenTypes()}
                    </div>
                </div>}
                {!filters.screen && filters.date && <div className={Styles.SubCatsSection}>
                    <p>datePicker</p>
                    {renderDateRange()}
                </div>}
            </div>
            <div className={Styles.controllers}>
                <button onClick={() => {
                    close();
                }}>cancel</button>
                <button onClick={applyFilters}>Apply Filters</button>
            </div>
        </div>
    )
}

export default Filters
