import {
  API_REQUEST_PHOTO,
  API_SUCCESS_PHOTO,
  API_FAILURE_PHOTO
} from "../reduxFiles/actions/type-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

//Request
function fetchPhoto() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/photos/"
  });
}
//https://swapi.co/api/people/1/
//https://jsonplaceholder.typicode.com/photos/ --> fotos
//https://jsonplaceholder.typicode.com/albums ---> Albums

function* workerSaga() {
  try {
    const response = yield call(fetchPhoto);
    const photo = response.data;
    yield put({ type: API_SUCCESS_PHOTO, payload: photo });
  } catch (error) {
    yield put({
      type: API_FAILURE_PHOTO,
      payload: {
        code: error.response.status,
        message: error.response.statusText
      }
    });
  }
}

export default function* watcherSagaPhoto() {
  yield takeLatest(API_REQUEST_PHOTO, workerSaga);
}

/**
 * De Redux saga
 * takeEvery: escucha la accion y ejecuta el creador de acciones
 */
