import { ReactComponent as FilterIcon } from "../../../assets/images/icon-filter.svg";
import React from 'react';

import Styles from "../../../assets/scss/styles.module.scss";

interface ITVsListFilterIconProps {
    openFiltersDialog: () => void;
    selectedFilterCount: number;
}

export function TVsListFilterIcon({
    openFiltersDialog,
    selectedFilterCount
}: ITVsListFilterIconProps) {

    return <div onClick={() => openFiltersDialog() }
        className={`${selectedFilterCount > 0 ? Styles.aplliedFilters : undefined} ${Styles.filterBtn}`}>
        <FilterIcon />
        <p><p>Filters</p> {selectedFilterCount > 0 && <span>({selectedFilterCount})</span>}</p>
    </div>
}