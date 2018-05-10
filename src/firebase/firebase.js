import * as firebase from 'firebase';


const config = {
  
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
