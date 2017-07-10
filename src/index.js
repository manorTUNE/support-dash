import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDd56msNFcLwTdB1SGMv7H8mLLNlq2ZLDE",
  authDomain: "support-dashboard-bf6e8.firebaseapp.com",
  databaseURL: "https://support-dashboard-bf6e8.firebaseio.com",
  projectId: "support-dashboard-bf6e8",
  storageBucket: "support-dashboard-bf6e8.appspot.com",
  messagingSenderId: "1095373847317"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
