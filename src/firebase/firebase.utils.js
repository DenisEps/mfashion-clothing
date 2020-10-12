import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'mfashion-db.firebaseapp.com',
  databaseURL: 'https://mfashion-db.firebaseio.com',
  projectId: 'mfashion-db',
  storageBucket: 'mfashion-db.appspot.com',
  messagingSenderId: '207484553250',
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
