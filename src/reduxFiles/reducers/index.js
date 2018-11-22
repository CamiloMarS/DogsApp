/** Reductores */
import { combineReducers } from "redux";
import {
  ADD_TODO,
  CHANGE_STATUS_TODO,
  START_COUNT,
  CHANGE_UI
} from "../actions/type-actions";
import initialState from "../state/index";
import getDog from "../reducers/reducerPets";
import photos from "../reducers/photoReducer";
import albums from "../reducers/albumReducer";

function todos(state = initialState["todos"], action) {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign([], state, [...state, { ...action.payload }]);
    }
    case CHANGE_STATUS_TODO: {
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.complete = true;
        }
        return todo;
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
