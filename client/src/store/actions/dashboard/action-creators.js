/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import { createAction } from 'redux-actions'
import * as actionTypes from '../action-types'
import * as service from 'services/request.js';

export const statistics = () => dispatch => {
    service.get('/api/dashboard/stats')
        .then(resp => {
            dispatch(createAction(actionTypes.DASHBOARD_STATISTICS)(resp))
        }).catch((error) => {
            console.error(error);
        });
}

export const txnPerHour = () => dispatch => {
    service.get('/api/dashboard/txnPerHour')
        .then(resp => {
            dispatch(createAction(actionTypes.DASHBOARD_TXN_PER_HOUR)(resp))
        }).catch((error) => {
            console.error(error);
        });
}

export const txnPerMin = (curChannel) => dispatch => {
    service.get('/api/dashboard/txnPerMin/')
        .then(resp => {
            dispatch(createAction(actionTypes.DASHBOARD_TXN_PER_MIN)(resp))
        }).catch((error) => {
            console.error(error);
        });
}

export const txnPerOrg = (curChannel) => dispatch => {
    service.get('/api/dashboard/txnPerOrg')
        .then(resp => {
            dispatch(createAction(actionTypes.DASHBOARD_TXN_PER_ORG)(resp))
        }).catch((error) => {
            console.error(error);
        });
}

export const transactions = () => dispatch => {
    service.get('/api/dashboard/transactions')
        .then(resp => {
            dispatch(createAction(actionTypes.DASHBOARD_TXNS)(resp))
        }).catch((error) => {
            console.error(error);
        });
}