import { SET_SEARCH_STATE, SET_SEARCH_TERM , SET_FILTER_COUNT , SET_FILTER_STATE , SET_DIALOG_STATE } from "./TVsList.action";


export function TVsListReducer(state: ITVsListState, action: any) {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        case SET_FILTER_STATE:
            return {
                ...state,
                filterState: action.payload
            }
        case SET_FILTER_COUNT:
            return {
                ...state,
                filterCount: action.payload
            }
        case SET_SEARCH_STATE:
            return {
                ...state,
                searchState: action.payload
            }
        case SET_DIALOG_STATE:
            return {
                ...state,
                isOpen: action.payload
            }
        default:
            return { ...state };
    }
};