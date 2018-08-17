/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import { createAction } from 'redux-actions'
import * as actionTypes from '../action-types'
import * as service from '../../../services/request.js';
import { createBrowserHistory } from 'history';
import CryptoJS from 'crypto-js';

const history = createBrowserHistory();

export const login = (username, password) => dispatch => {
    dispatch(createAction(actionTypes.LOGIN_REQUEST)(username));
    password = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    service.post('/api/userAuthenticate', {username, password})
        .then(res => {
            if(res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.user));
                dispatch(createAction(actionTypes.LOGIN_SUCCESS)(res.user));
            } else {
                localStorage.setItem('user', null);
                dispatch(createAction(actionTypes.LOGIN_FAILURE)(res.message.toString()));
                dispatch(createAction(actionTypes.ERROR)(res.message.toString()));
            }
        }).catch(error => {
            dispatch(createAction(actionTypes.LOGIN_FAILURE)(error.toString()));
            dispatch(createAction(actionTypes.ERROR)(error.toString()));
        });
}

export const logout = () => {
    localStorage.removeItem('user');
    return { type: actionTypes.LOGOUT };
};

export const register = (user) => dispatch => {
    dispatch(createAction(actionTypes.REGISTER_REQUEST)(user));

    service.post('/api/userRegister', user)
        .then(user => {
            dispatch(createAction(actionTypes.REGISTER_SUCCESS)(user));
            dispatch(createAction(actionTypes.SUCCESS)('Registration successful'));
        }).catch(error => {
            dispatch(createAction(actionTypes.REGISTER_FAILURE)(error.toString()));
            dispatch(createAction(actionTypes.ERROR)(error.toString()));
        })
}

export const getAll = () => dispatch => {
    dispatch(createAction(actionTypes.GETALL_REQUEST)());

    service.get('/api/users')
        .then(users => {
            dispatch(createAction(actionTypes.GETALL_SUCCESS)(users));
            history.push('/');
        }).catch(error => {
            dispatch(createAction(actionTypes.GETALL_FAILURE)(error.toString()));
            dispatch(createAction(actionTypes.ERROR)(error.toString()));
        });
};

export const deleteRequest = (id) => dispatch => {
    dispatch(createAction(actionTypes.DELETE_REQUEST)(id))

    service.deleteRequest('/api/userDelete', {id})
        .then(
            user => dispatch(createAction(actionTypes.DELETE_SUCCESS)(id)),
            error => dispatch(createAction(actionTypes.DELETE_FAILURE)(id, error.toString()))
        );
};