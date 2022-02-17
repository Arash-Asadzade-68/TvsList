import React, { ChangeEvent } from "react";
import { useState } from "react";

import Styles from "../../../assets/scss/styles.module.scss";
import { ReactComponent as ArrowDownIcon } from "../../../assets/images/icon-arrow-down.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icon-search.svg";
import { SearchItems } from "../../../constants";

export interface ITVsListSearchState {
    key: string;
    value: string;
}

interface ITVsListSearchProps {
    selectedSearchState: ITVsListSearchState
    onSearchChange: (value: ChangeEvent<HTMLInputElement>) => void;
    setSearchState: (value: ITVsListSearchState) => void;
}

export function TVsListSearch({
    selectedSearchState,
    setSearchState,
    onSearchChange
}: ITVsListSearchProps) {
    const [isOpen, setIsOpen] = useState(false);
    function onItemClick(key: string, value: string) {
        if (selectedSearchState.value !== value) {
            setSearchState({ key: key, value: value });
        }
        setIsOpen(false);
    }
    return <div tabIndex={-1} onBlur={() => setIsOpen(false)}>
        <div className={Styles.selectBar} onClick={() => setIsOpen((isOpenState) => !isOpenState)} data-component-name="searchOptions">
            <p>{selectedSearchState?.value}</p>
            <ArrowDownIcon />
            <span></span>
        </div>
        <input type={selectedSearchState.key === "views" ? "number" : "text"}
            placeholder={selectedSearchState.value} onChange={onSearchChange}
            data-component-name="searchInput" />
        <SearchIcon />
        <div className={`${Styles.options} ${isOpen ? Styles.openSelectContainer : undefined}`} onBlur={() => setIsOpen(false)} >
            {
                SearchItems.map((item: { key: string, value: string }) =>
                    <p key={item.key} onClick={() => onItemClick(item.key, item.value)} data-component-name="searchOption"
                    >{item.value}</p>
                )
            }
        </div>
    </div>
}