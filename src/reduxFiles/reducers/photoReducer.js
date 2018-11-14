import initialState from "../state/index"; //importar el estado inicia
import {
  API_REQUEST_PHOTO,
  API_SUCCESS_PHOTO,
  API_FAILURE_PHOTO
} from "../actions/type-actions"; //Constantes de acciones

//Reducer asincrono
function photos(state = initialState["photos"], action) {
  switch (action.type) {
    case API_REQUEST_PHOTO: {
      return Object.assign({}, state, { loading: true });
    }
    case API_SUCCESS_PHOTO: {
      return Object.assign({}, state, {
        loading: false,
        list: action.payload
      });
    }
    case API_FAILURE_PHOTO: {
      return {
        loading: false,
        list: [],
        message: action.payload
      };
    }
    default:
      return state;
  }
}

export default photos;
