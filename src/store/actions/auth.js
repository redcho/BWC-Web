import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkTimeOut = (expirationTime) => {
    return dispatch => {
      setTimeout(() => {
        dispatch(logout());
      }, expirationTime * 1000)
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaPMr8rQae3EmM8F1G5n7OAgT_G3DPWOk', authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date (new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken );
                localStorage.setItem('expirationDate', expirationDate );
                localStorage.setItem('userId', response.data.localId)
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkTimeOut(response.data.expiresIn));
            })
            .catch( err => {
                console.log(err);
                dispatch(authFail(err));
            });
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()) {
                dispatch(logout());
            } else{
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }

        }
    }
};
