import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  API_REQUEST_ALBUM,
  API_SUCCESS_ALBUM,
  API_FAILURE_ALBUM
} from "../reduxFiles/actions/type-actions";

//Request
function getAlbums() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/albums"
  });
}

function* workerSaga() {
  try {
    const response = yield call(getAlbums);
    const albums = response.data;
    yield put({ type: API_SUCCESS_ALBUM, payload: albums });
  } catch (error) {
    yield put({ type: API_FAILURE_ALBUM, payload: error });
  }
}

export default function* watcherSagaAlbum() {
  yield takeLatest(API_REQUEST_ALBUM, workerSaga);
}
