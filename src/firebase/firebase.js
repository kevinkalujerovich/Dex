import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tiendareact-ce370.firebaseapp.com",
  projectId: "tiendareact-ce370",
  storageBucket: "tiendareact-ce370.appspot.com",
  messagingSenderId: "370023575733",
  appId: "1:370023575733:web:302150789bf145a04d0efc",
};
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
