/**
 *    SPDX-License-Identifier: Apache-2.0
 */

const namespaces = 'blockchain-application';

export const SUCCESS = `${namespaces}/ALERT_SUCCESS`;
export const ERROR = `${namespaces}/ALERT_ERROR`;
export const CLEAR = `${namespaces}/ALERT_CLEAR`;
export const REGISTER_REQUEST = `${namespaces}/USERS_REGISTER_REQUEST`;
export const REGISTER_SUCCESS = `${namespaces}/USERS_REGISTER_SUCCESS`;
export const REGISTER_FAILURE = `${namespaces}/USERS_REGISTER_FAILURE`;
export const LOGIN_REQUEST = `${namespaces}/USERS_LOGIN_REQUEST`;
export const LOGIN_SUCCESS = `${namespaces}/USERS_LOGIN_SUCCESS`;
export const LOGIN_FAILURE = `${namespaces}/USERS_LOGIN_FAILURE`;
export const LOGOUT = `${namespaces}/USERS_LOGOUT`;
export const GETALL_REQUEST = `${namespaces}/USERS_GETALL_REQUEST`;
export const GETALL_SUCCESS = `${namespaces}/USERS_GETALL_SUCCESS`;
export const GETALL_FAILURE = `${namespaces}/USERS_GETALL_FAILURE`;
export const DELETE_REQUEST = `${namespaces}/USERS_DELETE_REQUEST`;
export const DELETE_SUCCESS = `${namespaces}/USERS_DELETE_SUCCESS`;
export const DELETE_FAILURE = `${namespaces}/USERS_DELETE_FAILURE`;

// Dashboard Types
export const DASHBOARD_LOADING = `${namespaces}/LOADING`;
export const DASHBOARD_STATISTICS = `${namespaces}/STATISTICS`;
export const DASHBOARD_TXN_PER_HOUR = `${namespaces}/TXN_PER_HOUR`;
export const DASHBOARD_TXN_PER_MIN = `${namespaces}/TXN_PER_MIN`;
export const DASHBOARD_TXN_PER_ORG = `${namespaces}/TXN_PER_ORG`;
export const DASHBOARD_PEERS = `${namespaces}/PEERS`;
export const DASHBOARD_TXNS = `${namespaces}/TXNS`;