import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {getFirestore, doc, getDoc, setDoc, snapshotEqual} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4WIY4G_mpCFoixw9wjB3CYLJeUbvI47U",
  authDomain: "crwn-clothing-db-98cb5.firebaseapp.com",
  projectId: "crwn-clothing-db-98cb5",
  storageBucket: "crwn-clothing-db-98cb5.appspot.com",
  messagingSenderId: "460810158988",
  appId: "1:460810158988:web:270d4a235281381ac30ca9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid)
  console.log(userDocRef);


  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const {displayName, email } =  userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })
    } catch(error) {
      console.log("Error creating the user", error.message)
    }
  }

  return userDocRef;
}


