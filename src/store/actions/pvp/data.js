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

export const data = () => {
    // switch (action.type) {
    //     case '2v2':
    //         this.data('2v2');
    //         break;
    //     case '3v3':
    //         this.data('3v3');
    //         break;
    //     case 'rbg':
    //         this.data('rbg');
    //         break;
    // }
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



// export const dataType = () => {
//     return dispatch => {
//         dispatch(fetchDataStart());
//         axios.get('/pvp.json'+action.type)
//             .then(response => {
//                 const DummyData = [];
//                 for (let key in response.data) {
//                     DummyData.push({
//                         ...response.data[key],
//                         id: key
//                     });
//                 }
//                 dispatch(fetchDataSuccess(DummyData));
//             }).catch(err => {
//             dispatch(fetchDataFail(err));
//         });
//     }
// }