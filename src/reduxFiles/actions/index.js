/** CREADORES DE ACCIONES */
import {
  ADD_TODO,
  START_COUNT,
  FILTER_PHOTOS_ALBUM,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  API_CALL_REQUEST,
  API_FAILURE_PHOTO,
  API_REQUEST_PHOTO,
  API_SUCCESS_PHOTO,
  CHANGE_UI,
  API_REQUEST_ALBUM,
  API_SUCCESS_ALBUM,
  API_FAILURE_ALBUM
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

function filterPhotosAlbum(object) {
  return {
    type: FILTER_PHOTOS_ALBUM,
    payload: { ...object }
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

function changeUi(route) {
  return {
    type: CHANGE_UI,
    payload: route
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
    return {
      type: API_REQUEST_PHOTO
    };
  }
};

const actionsAlbums = {
  apiRequestAlbum: function() {
    return {
      type: API_REQUEST_ALBUM
    };
  },
  apiSuccessAlbum: function(albums) {
    return {
      type: API_SUCCESS_ALBUM,
      payload: albums
    };
  },
  apiFailureAlbums: function(error) {
    return { type: API_FAILURE_ALBUM, payload: error };
  }
};

export {
  addTodo,
  startCount,
  filterPhotosAlbum,
  apiCallFailure,
  apiCallSuccess,
  apiCallRequest,
  actionsPhotos,
  actionsAlbums,
  changeUi
};
