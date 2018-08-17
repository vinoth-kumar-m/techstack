import * as actionTypes from '../actions/action-types';

const alert = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS:
      return {
        type: 'alert-success',
        message: action.payload
      };
    case actionTypes.ERROR:
      return {
        type: 'alert-danger',
        message: action.payload
      };
    case actionTypes.CLEAR:
      return {};
    default:
      return state
  }
};

export default alert;