import axios from "../../axios-data";

import * as actionTypes from './actionTypes';

export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    };
};

export const fetchDataFail = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    };
};

export const fetchDataStart = () => {
    return {
        type: actionTypes.FETCH_DATA_START
    }
};

export const data = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        axios.get('/pvp.json')
            .then(response => {
                const DummyData = [];
                for (let key in response.data) {
                    DummyData.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fetchDataSuccess(DummyData));
            }).catch(err => {
                dispatch(fetchDataFail(err));
        });
    }
};

