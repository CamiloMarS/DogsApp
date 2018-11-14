/** Reductores */
import { combineReducers } from "redux";
import { ADD_TODO, START_COUNT } from "../actions/type-actions";
import initialState from "../state/index";
import getDog from "../reducers/reducerPets";

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
function startCount(state = initialState["userInterface"], action) {
  switch (action.type) {
    case START_COUNT: {
      return Object.assign({}, state, { countTime: action.payload });
    }
    default:
      return state;
  }
}

/*
 *  Combinar los reducers
 */

const reducers = combineReducers({
  todos,
  startCount,
  getDog
});

export default reducers;
