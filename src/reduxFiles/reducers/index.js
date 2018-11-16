/** Reductores */
import { combineReducers } from "redux";
import { ADD_TODO, START_COUNT, CHANGE_UI } from "../actions/type-actions";
import initialState from "../state/index";
import getDog from "../reducers/reducerPets";
import photos from "../reducers/photoReducer";

//Agregar todo
function todos(state = initialState["todos"], action) {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, {
        todos: [...state, { ...action["payload"] }]
      });
    }
    default:
      return state;
  }
}

//Comenzar conteo
function startCount(state = initialState["startCount"], action) {
  switch (action.type) {
    case START_COUNT: {
      return Object.assign({}, state, { countTime: action.payload });
    }
    case CHANGE_UI: {
      return Object.assign({}, state, { currentUI: action.payload });
    }
    default:
      return state;
  }
}

//Cambiar UI

/*
 *  Combinar los reducers
 */

const reducers = combineReducers({
  todos,
  startCount,
  getDog,
  photos
});

export default reducers;
