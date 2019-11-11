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

  // const firebaseConfig = {
  //   apiKey: "AIzaSyDPxpfkozbZI3St2L9y_mmLcrhbipKgzlQ",
  //   authDomain: "mgxbike.firebaseapp.com",
  //   databaseURL: "https://mgxbike.firebaseio.com",
  //   projectId: "mgxbike",
  //   storageBucket: "mgxbike.appspot.com",
  //   messagingSenderId: "134433103800",
  //   appId: "1:134433103800:web:880e637d4fe64d0150794d"
  // };

firebase.initializeApp(firebaseConfig);

export default firebase;