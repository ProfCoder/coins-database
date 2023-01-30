import { SET_COINS_TYPE, SET_COUNTRIES_TYPE, SET_COMPOSITION_TYPE, SET_QUALITY_TYPE, SET_SEARCH_TYPE, SET_ADVANCED_SEARCH_TYPE } from "./types";

export const SET_COINS = data => ({type: SET_COINS_TYPE, payload: data});
export const SET_COUNTRIES = data => ({type: SET_COUNTRIES_TYPE, payload: data});
export const SET_COMPOSITION = data => ({type: SET_COMPOSITION_TYPE, payload: data});
export const SET_QUALITY = data => ({type: SET_QUALITY_TYPE, payload: data});
export const SET_SEARCH = data => ({type: SET_SEARCH_TYPE, payload: data});
export const SET_ADVANCED_SEARCH = data_advanced => ({type: SET_ADVANCED_SEARCH_TYPE, payload: data_advanced});


