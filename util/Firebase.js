import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
