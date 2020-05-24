import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";

import App from "./components/App";

import {postsReducer, filterReducer} from "./redux/reducers/rootReducer";
import rootSaga from "./redux/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    postReducer: postsReducer,
    filterReducer: filterReducer,
  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);