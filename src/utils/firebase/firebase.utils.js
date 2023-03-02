import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4WIY4G_mpCFoixw9wjB3CYLJeUbvI47U",
  authDomain: "crwn-clothing-db-98cb5.firebaseapp.com",
  projectId: "crwn-clothing-db-98cb5",
  storageBucket: "crwn-clothing-db-98cb5.appspot.com",
  messagingSenderId: "460810158988",
  appId: "1:460810158988:web:270d4a235281381ac30ca9",
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if(!userAuth) return;
  const userDocRef = await doc(db, "users", userAuth.uid)


  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const {displayName, email } =  userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt,...additionalInformation
      })
    } catch(error) {
      console.log("Error creating the user", error.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)


