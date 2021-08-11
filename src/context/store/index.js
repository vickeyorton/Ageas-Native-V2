import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
// import createSagaMiddleware from "@redux-saga/core";
// import rootSaga from "../../Sagas";
import { logger } from "redux-logger";

// const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(logger));
// sagaMiddleware.run(rootSaga);

export default store;
