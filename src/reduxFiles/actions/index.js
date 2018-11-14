/** CREADORES DE ACCIONES */
import {
  ADD_TODO,
  START_COUNT,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  API_CALL_REQUEST
} from "../actions/type-actions";

/**
 * @function addTodo
 * @param {*} todo recibe un objeto
 */
function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

/**
 * @function startCount
 * @param null
 */
function startCount(bool) {
  return {
    type: START_COUNT,
    payload: bool
  };
}

/**
 * @function reducer Pet
 */
function apiCallSuccess(dog) {
  return {
    type: API_CALL_SUCCESS,
    payload: dog
  };
}

function apiCallFailure(error) {
  return {
    type: API_CALL_FAILURE,
    payload: error
  };
}

function apiCallRequest() {
  return {
    type: API_CALL_REQUEST
  };
}

export { addTodo, startCount, apiCallFailure, apiCallSuccess, apiCallRequest };
