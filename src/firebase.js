import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDnmj5uAS5Tka3-UwOWMUtuik8w0Ckn7Ag",
  authDomain: "legenda-parfum.firebaseapp.com",
  projectId: "legenda-parfum",
  storageBucket: "legenda-parfum.appspot.com",
  messagingSenderId: "798048296331",
  appId: "1:798048296331:web:ac1b849da99e930cc3a38e",
  measurementId: "G-VYJFJ8E1C2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
