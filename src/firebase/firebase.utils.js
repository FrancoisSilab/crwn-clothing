import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBoEdBCWD8VvVX-siukpDIwZqtYs9rfkhY",
  authDomain: "crwn-db-5a918.firebaseapp.com",
  databaseURL: "https://crwn-db-5a918.firebaseio.com",
  projectId: "crwn-db-5a918",
  storageBucket: "",
  messagingSenderId: "408381686342",
  appId: "1:408381686342:web:b7092fd16153f15c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
