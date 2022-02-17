
import React, { ChangeEvent, Dispatch } from "react";
import Styles from "../../../assets/scss/styles.module.scss";
import { TVsListFilterIcon } from "../Filter/FilterButton";
import { ITVsListSearchState,  TVsListSearch} from "../ListSearch";
import { setSearchState, setSearchTerm , setDialogState } from "../state/TVsList.action";


interface ITVsListActionProps {
    
    selectedSearchState: ITVsListSearchState;
    dispatch: Dispatch<any>;
    selectedFilterCount: number;
    filterState: IFilterState;
    canSearchItems?: boolean;
}

export function TVsListActionBar({
    selectedSearchState,
    selectedFilterCount,
    dispatch,
    canSearchItems = true
}: ITVsListActionProps) {
    function openFilterDialog() {
        dispatch(setDialogState(true))
    }
    function setSearchStateObject(searchState: ITVsListSearchState) {
        dispatch(setSearchState(searchState));
    }
    function onChangeSearchTerm(value: ChangeEvent<HTMLInputElement>) {
        dispatch(setSearchTerm(value.target.value.toLowerCase()));
    }
    return <div className={Styles.SearchBarContainer}>
        <div>
            {canSearchItems && <TVsListSearch selectedSearchState={selectedSearchState}
                setSearchState={setSearchStateObject}
                onSearchChange={onChangeSearchTerm} />}
            <TVsListFilterIcon key={"filter-button"}  selectedFilterCount={selectedFilterCount}
                openFiltersDialog={openFilterDialog} />
        </div>

    </div>
}