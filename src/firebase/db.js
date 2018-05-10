import { db } from './firebase';


//USER API

export const doCreateUser = (id, email) =>
  db.ref(`/users/${id}`).set({
    email
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');
