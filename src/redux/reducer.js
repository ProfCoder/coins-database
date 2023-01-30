import {SET_COINS_TYPE, SET_COUNTRIES_TYPE, SET_COMPOSITION_TYPE, SET_QUALITY_TYPE, SET_SEARCH_TYPE, SET_ADVANCED_SEARCH_TYPE } from "./types";

const initialState = {
    coins: [],
    search: [],
    advancedSearch: []
}

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case SET_COINS_TYPE: 
            return {
                ...state,
                coins: action.payload
            }
        case SET_COUNTRIES_TYPE: 
            return {
                ...state,
                countries: action.payload
            }
        case SET_COMPOSITION_TYPE: 
            return {
                ...state,
                compositions: action.payload
            }
        case SET_QUALITY_TYPE: 
            return {
                ...state,
                quality: action.payload
            }
        case SET_SEARCH_TYPE: 
            return {
                ...state,
                search: action.payload
            }
        case SET_ADVANCED_SEARCH_TYPE: 
            return {
                ...state,
                advancedSearch: action.payload
            }
        default:
            return state;
    }
    return state;
}

export default reducer;