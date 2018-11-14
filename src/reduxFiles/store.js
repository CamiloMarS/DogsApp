import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers/index"; //Carlos reducers ya combinados
import { composeWithDevTools } from "redux-devtools-extension";
/** redux sagas */
import createSagaMiddleware from "redux-saga";
import watcherSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();
//crear el store
const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
  )
);

sagaMiddleware.run(watcherSaga);

export default store;
