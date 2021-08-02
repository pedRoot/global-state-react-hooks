import { userConstants } from "../constants";

const initialState = {};

const authentication = (state = initialState, action) => {

  switch (action.type) {
    case userConstants.GET_DETAIL_SUCCESS:
      console.log('state: ', state);
      return {
        ...state,
        response: action.payload
      };

    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        response: action.payload
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,        
        response: action.payload
      };

    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        response: action.payload
      };

    case userConstants.LOGOUT:
      return {};

    default:
      return state
  }

}

export { authentication }