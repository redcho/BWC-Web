import axios from "../../../axios-data";

import * as actionTypes from '../actionTypes';

export const fetchDataSuccess = (data) => {
  console.log('SUCCESS INSIDE DATA' + data);
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    };
};


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

export const fetchDataSuccessCharacter = (data) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS_CHARACTER,
    data: data
  }
};

export const fetchDataFail = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    };
};


export const dataCharacter = () => {
  return dispatch => {
    axios.get('/development/character.json')
      .then(response => {
        const characterData = [];
          for (let key in response.data) {
            characterData.push({
              ...response.data[key],
              id: key
            });
          }
          dispatch(fetchDataSuccessCharacter(characterData));
      }).catch( err => {
        dispatch(fetchDataFail(err));
      });
  }
};

export const data_bracket = (bracket) => {
  return dispatch => {
      axios.get('/development/27/' + bracket + '.json')
          .then(response => {
              const DummyData = [];
              for (let key in response.data) {
              if(response.data[key]) {
                for (let j=0; j<response.data[key].length; j++ ) {
                  // console.log(response.data[key][j].character.id)
                  DummyData.push(
                    response.data[key][j].character.id
                    // id: response.data[key][j]
                  )
                }
                // console.log(DummyData)
              }
            }
            dispatch(fetchDataSuccess_bracket(DummyData, bracket));
          }).catch(err => {
          dispatch(fetchDataFail(err));
      });
  }
}
