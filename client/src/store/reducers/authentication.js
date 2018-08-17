import * as actionTypes from '../actions/action-types';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: false, user } : {};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: null
      };
    case actionTypes.LOGOUT:
      return {
        loggedIn: false,
        user: null
      };
    default:
      return state
  }
};

export default authentication;