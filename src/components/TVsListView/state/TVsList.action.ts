import { ITVsListSearchState } from "../ListSearch";

export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export function setSearchTerm(value: string) {
    return {
        type: SET_SEARCH_TERM,
        payload: value
    }
};

export const SET_FILTER_STATE = "SET_FILTER_STATE";

export function setFilterState(value: Partial<IFilterState>) {
    return {
        type: SET_FILTER_STATE,
        payload: value
    }
};

export const SET_FILTER_COUNT = "SET_FILTER_COUNT";

export function setFilterCount(value: number) {
    return {
        type: SET_FILTER_COUNT,
        payload: value
    }
};

export const SET_SEARCH_STATE = "SET_SEARCH_STATE";

export function setSearchState(value: ITVsListSearchState) {
    return {
        type: SET_SEARCH_STATE,
        payload: value
    }
};
export const SET_DIALOG_STATE = "SET_DIALOG_STATE";

export function setDialogState(value: boolean) {
    return {
        type: SET_DIALOG_STATE,
        payload: value
    }
};
