import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utlity';

const initialState = {
    pvp_2v2: null,
    pvp_3v3: null,
    pvp_rbg: null,
    data_character: null,
    loading: false,
    error: null
}


const fetchDataSuccess = (state,action) => {
     return updatedObject(state, {pvp_2v2: action.data})
}

const fetchDataSuccess_2v2 = (state,action) => {
     return updatedObject(state, {pvp_2v2: action.data})
}
const fetchDataSuccess_3v3 = (state,action) => {
     return updatedObject(state, {pvp_3v3: action.data})
}
const fetchDataSuccess_rbg = (state,action) => {
     return updatedObject(state, {pvp_rbg: action.data})
}

const fetchDataSuccess_character = (state,action) => {
     return updatedObject(state, {data_character: action.data})
}

const fetchDataFail = (state, action) => {
    return updatedObject(state, {error: action.error, loading: false})
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        // case actionTypes.FETCH_DATA_START: return fetchDataStart(state, action);
        case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess(state, action);
        case actionTypes.FETCH_DATA_SUCCESS_2V2: return fetchDataSuccess_2v2(state, action);
        case actionTypes.FETCH_DATA_SUCCESS_3V3: return fetchDataSuccess_3v3(state, action);
        case actionTypes.FETCH_DATA_SUCCESS_RBG: return fetchDataSuccess_rbg(state, action);
        case actionTypes.FETCH_DATA_SUCCESS_CHARACTER: return fetchDataSuccess_character(state, action);
        case actionTypes.FETCH_DATA_FAIL: return fetchDataFail(state, action);

        break;
        default:
            return state;
    }
};

export default reducer;
