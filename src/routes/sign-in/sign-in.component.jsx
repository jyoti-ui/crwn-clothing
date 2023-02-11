import React, { useEffect } from 'react';
import "./sign-in.styles.scss";
import {signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth} from "../../utils/firebase/firebase.utils.js"
import {getRedirectResult} from "firebase/auth"
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Signin = () => {

  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);

    if(response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
      console.log(userDocRef)
    }
  })()},[])

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(response.user)
    }
  return (
    <div>
    <h1> Sign in page</h1>
    <button onClick={logGoogleUser}>
        Sign in with google popup
    </button>
    <button onClick={signInWithGoogleRedirect}>
      Sign in with Google Redirect
    </button>
    <SignUpForm/>
    </div>
  )
}

export default Signin;