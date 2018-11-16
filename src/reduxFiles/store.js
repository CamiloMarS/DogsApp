import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers/index"; //Carlos reducers ya combinados
import { composeWithDevTools } from "redux-devtools-extension";
/** redux sagas */
import createSagaMiddleware from "redux-saga";

import watcherSaga from "../sagas/index"; //Saga para los perros
import watcherSagaPhoto from "../sagas/photos"; //Saga para las fotos
import watcherSagaAlbum from "../sagas/albums";

const sagaMiddleware = createSagaMiddleware(); //Crear nuestro middleware

//crear el store
const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware), //Conectar el middleware con el store
    composeWithDevTools()
  )
);

//Inicializar las sagas
sagaMiddleware.run(watcherSaga);
sagaMiddleware.run(watcherSagaAlbum);
sagaMiddleware.run(watcherSagaPhoto);

export default store;
