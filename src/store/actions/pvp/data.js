import axios from "../../../axios-data";

import * as actionTypes from '../actionTypes';

export const fetchDataSuccess = (data) => {
  console.log('SUCCESS INSIDE DATA' + data);
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    };
};

// export const fetchDataSuccess_3v3 = (data) => {
    // return {
    //     type: actionTypes.FETCH_DATA_SUCCESS_3v3,
    //     data: data
    // };
// };

export const fetchDataSuccess_bracket = (data, pvp_type) => {
  switch(pvp_type) {
    case "2v2": return {
      type: actionTypes.FETCH_DATA_SUCCESS_2V2,
      data: data
    };
    case "3v3": return {
        type: actionTypes.FETCH_DATA_SUCCESS_3V3,
        data: data
    };
    case "rbg": return {
        type: actionTypes.FETCH_DATA_SUCCESS_RBG,
        data: data
    };
  }
}

export const fetchDataFail = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    };
};

// export const fetchDataStart = () => {
//     return {
//         type: actionTypes.FETCH_DATA_START
//     }
// };

// export const data_2v2 = () =>  {
//   return dispatch => {
//       dispatch(fetchDataStart());
//       axios.get('/development/character.json')
//           .then(response => {
//               const DummyData = [];
//               for (let key in response.data) {
//                   if(response.data[key]) {
//                       DummyData.push({
//                           ...response.data[key],
//                           id: response.data[key].rank
//                       });
//                   }
//               }
//               dispatch(fetchDataSuccess_bracket(DummyData));
//           }).catch(err => {
//           dispatch(fetchDataFail(err));
//       });
//   }
// }

export const data_bracket = (bracket) => {
  return dispatch => {
      // dispatch(fetchDataStart());
      axios.get('/development/27/' + bracket + '.json')
          .then(response => {
              const DummyData = [];
              for (let key in response.data) {
              if(response.data[key]) {
                for (let j=0; j<response.data[key].length; j++ ) {
                  DummyData.push({
                    ...response.data[key][j],
                    id: response.data[key][j]
                  })
                }
              }
            }
            console.log(DummyData);
            dispatch(fetchDataSuccess_bracket(DummyData, bracket));
          }).catch(err => {
          dispatch(fetchDataFail(err));
      });
  }
}
