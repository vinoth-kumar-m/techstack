import * as actionTypes from '../actions/action-types';

const initialState = { loading: false, items: null, error: '' };

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETALL_REQUEST:
      return {
        loading: true
      };
    case actionTypes.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case actionTypes.GETALL_FAILURE:
      return {
        error: action.error
      };
    case actionTypes.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case actionTypes.DELETE_SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case actionTypes.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
};

export default users;