import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyB4bnY1Sk8XaNq1Zn9ZxAwXz5-1Kd2AErc",
    authDomain: "defaultreactfirebase.firebaseapp.com",
    databaseURL: "https://defaultreactfirebase.firebaseio.com",
    projectId: "defaultreactfirebase",
    storageBucket: "defaultreactfirebase.appspot.com",
    messagingSenderId: "800824885911"
  };


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
   db,
  auth,
};
