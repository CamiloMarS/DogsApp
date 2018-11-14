import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/type-actions";
import initialState from "../state/index";

//Reducer para la asincronia redux
function getDog(state = initialState["getDog"], action) {
  switch (action.type) {
    case API_CALL_REQUEST: {
      return Object.assign({}, state, {
        ...state,
        fetching: true,
        error: false
      });
    }
    case API_CALL_SUCCESS: {
      return Object.assign({}, state, {
        ...state,
        fetching: false,
        dog: action.payload
      });
    }
    case API_CALL_FAILURE: {
      return Object.assign({}, state, {
        fetching: false,
        dog: null,
        error: action.payload
      });
    }
    default:
      return state;
  }
}

export default getDog;
