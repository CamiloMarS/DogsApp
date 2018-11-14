import {
  API_CALL_REQUEST,
  API_CALL_FAILURE,
  API_CALL_SUCCESS
} from "../reduxFiles/actions/type-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

/**
 * Funciona de la socilitud de la api
 */
function fetchsDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchsDog);
    const dog = response.data.message;
    yield put({ type: API_CALL_SUCCESS, payload: dog });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, payload: error });
  }
}

/**
 * Saga observadora:
 * observa las acciones enviadas al store y comienza la saga de worker
 */
export default function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

/**
 * API: para probar: https://jsonplaceholder.typicode.com/photos
 */
