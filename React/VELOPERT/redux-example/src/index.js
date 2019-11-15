import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { createStore } from "redux";
import reducers from "./reducers";
// import * as actions from "./actions";

import { Provider } from "react-redux";

const store = createStore(reducers);

// console.log(store.getState()); //store 확인
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// unsubscribe(); //삭제
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
