import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';
import * as serviceWorker from './serviceWorker';

const CONFIG = {
  apiKey: "AIzaSyDFBfATxROvtSbvH7lwkMCd7JP-zB5GzzU",
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
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
