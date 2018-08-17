/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import { combineReducers } from 'redux'
import alert from './alert';
import authentication from './authentication';
import users from './user';
import registration from './registration';
import dashboard from './dashboard';

export default combineReducers({
    alert,
    authentication,
    users,
    registration,
    dashboard
})