import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0bANX3O9iUuH4beqBlKDS4IJF_RBih4Y",
    authDomain: "crwn-db-b9e25.firebaseapp.com",
    projectId: "crwn-db-b9e25",
    storageBucket: "crwn-db-b9e25.appspot.com",
    messagingSenderId: "477691736077",
    appId: "1:477691736077:web:5b5a55a83d3e85d15aa544",
    measurementId: "G-BJRHHJRVN2"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
      return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(error){
        console.log('Error creating user', error.message)
      }
    }

    return userRef;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;