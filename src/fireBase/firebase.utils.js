import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAV_YN5JGqEA2vAFuMLntUVfFG2lEKhJr4",
  authDomain: "crwn-db-ae03a.firebaseapp.com",
  databaseURL: "https://crwn-db-ae03a.firebaseio.com",
  projectId: "crwn-db-ae03a",
  storageBucket: "crwn-db-ae03a.appspot.com",
  messagingSenderId: "289769652650",
  appId: "1:289769652650:web:0b5b5d065e03b849fb6bd3",
  measurementId: "G-CTLJR4VBKQ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
