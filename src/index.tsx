import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import firebase from 'firebase/app';
import 'firebase/auth';

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { pageReducers } from "./pages";
import { userReducer } from "./pages/Login/state";

const store = createStore(
  combineReducers({
    pages: pageReducers,
    auth: userReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

const CONFIG = {
  authDomain: "spendr-3a024.firebaseapp.com",
  databaseURL: "https://spendr-3a024.firebaseio.com",
  projectId: "spendr-3a024",
  storageBucket: "spendr-3a024.appspot.com",
  messagingSenderId: "1038831560710"
};
 export const fireApp = firebase.initializeApp(CONFIG);
 export const provider = new firebase.auth.GoogleAuthProvider();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
