import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAmX95qAs40WPtk3NYmH_8XHt_VvDLABeo",
    authDomain: "reventdemo-4a253.firebaseapp.com",
    databaseURL: "https://reventdemo-4a253.firebaseio.com",
    projectId: "reventdemo-4a253",
    storageBucket: "reventdemo-4a253.appspot.com",
    messagingSenderId: "955383280363",
    appId: "1:955383280363:web:4b808132ae8d79592544ae"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;