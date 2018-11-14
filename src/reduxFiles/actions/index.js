/** CREADORES DE ACCIONES */
import {
  ADD_TODO,
  START_COUNT,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  API_CALL_REQUEST,
  API_FAILURE_PHOTO,
  API_REQUEST_PHOTO,
  API_SUCCESS_PHOTO
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
function apiCallSuccess(object) {
  return {
    type: API_CALL_SUCCESS,
    payload: object
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

const actionsPhotos = {
  apiSuccessPhoto: function(photos) {
    return {
      type: API_SUCCESS_PHOTO,
      payload: photos
    };
  },
  apiFailurePhoto: function(error) {
    return {
      type: API_FAILURE_PHOTO,
      payload: error
    };
  },
  apiRequestPhoto: function() {
    console.log("ACTION ACTIVE");
    return {
      type: API_REQUEST_PHOTO
    };
  }
};

export {
  addTodo,
  startCount,
  apiCallFailure,
  apiCallSuccess,
  apiCallRequest,
  actionsPhotos
};
