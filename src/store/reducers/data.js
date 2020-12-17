import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utlity';

const initialState = {
    pvp_2v2: null,
    pvp_3v3: null,
    rbg: null,
    loading: false,
    error: null
}

const fetchDataStart = (state, action) => {
    return updatedObject(state , {error: null , loading: true})
}

const fetchDataSuccess = (state,action) => {
     return updatedObject(state, {pvp_2v2: action.data})
}

const fetchDataFail = (state, action) => {
    return updatedObject(state, {error: action.error, loading: false})
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_START: return fetchDataStart(state, action);
        case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess(state, action);
        case actionTypes.FETCH_DATA_FAIL: return fetchDataFail(state, action);


        default:
            return state;
    }
};

export default reducer;


