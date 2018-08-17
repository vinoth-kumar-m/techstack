import { handleActions } from 'redux-actions';
import { Record } from 'immutable';
import * as actionTypes from '../actions/action-types';

const InitialState = new Record({
    stats: [],
    txnPerHour: [],
    txnPerMin: [],
    txnPerOrg: [],
    transactions: [],
    errors: {},
});

const dashboard = handleActions({
    [actionTypes.DASHBOARD_STATISTICS]: (state = InitialState(), action) => state
        .set('stats', action.payload)
        .set('errors', action.error),
    [actionTypes.DASHBOARD_TXN_PER_HOUR]: (state = InitialState(), action) => state
        .set('txnPerHour', action.payload)
        .set('errors', action.error),
    [actionTypes.DASHBOARD_TXN_PER_MIN]: (state = InitialState(), action) => state
        .set('txnPerMin', action.payload)
        .set('errors', action.error),
    [actionTypes.DASHBOARD_TXN_PER_ORG]: (state = InitialState(), action) => state
        .set('txnPerOrg', action.payload)
        .set('errors', action.error),
    [actionTypes.DASHBOARD_TXNS]: (state = InitialState(), action) => state
        .set('transactions', action.payload)
        .set('errors', action.error)

}, new InitialState());

export default dashboard;