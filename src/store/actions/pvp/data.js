import axios from "../../../axios-data";

import * as actionTypes from '../actionTypes';

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

export const data_2v2 = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        axios.get('/development/27/2v2.json')
            .then(response => {
                const DummyData = [];
                for (let key in response.data) {
                    if(response.data[key]) {
                        DummyData.push({
                            ...response.data[key],
                            id: key
                        });
                    }
                }
                dispatch(fetchDataSuccess(DummyData));
            }).catch(err => {
            dispatch(fetchDataFail(err));
        });
    }
};

export const data_3v3 = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        axios.get('pvp/3v3.json')
            .then(response => {
                const DummyData = [];
                for (let key in response.data) {
                    DummyData.push({
                        ...response.data[key],
                        id: data_3v3[key]
                    });
                }
                dispatch(fetchDataSuccess(DummyData));
            }).catch(err => {
            dispatch(fetchDataFail(err));
        });
    }
};

export const data_rbg = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        axios.get('pvp/rbg.json')
            .then(response => {
                const DummyData = [];
                for (let key in response.data) {
                    DummyData.push({
                        ...response.data[key],
                        id: data_rbg[key]
                    });
                }
                console.log(DummyData)
                dispatch(fetchDataSuccess(DummyData));
            }).catch(err => {
            dispatch(fetchDataFail(err));
        });
    }
};

