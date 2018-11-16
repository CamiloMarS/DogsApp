/** Reductores */
import { combineReducers } from "redux";
import { ADD_TODO, START_COUNT, CHANGE_UI } from "../actions/type-actions";
import initialState from "../state/index";
import getDog from "../reducers/reducerPets";
import photos from "../reducers/photoReducer";
import albums from "../reducers/albumReducer";

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

/** Combinar los reductores */
const reducers = combineReducers({
  todos,
  startCount,
  getDog,
  photos,
  albums
});

export default reducers;
