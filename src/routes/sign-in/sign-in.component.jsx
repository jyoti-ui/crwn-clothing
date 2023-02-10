import React from 'react';
import "./sign-in.styles.scss";
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils.js"

const Signin = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response)
        const userDocRef = createUserDocumentFromAuth(response.user)
    }
  return (
    <div>
    <h1> Sign in page</h1>
    <button onClick={logGoogleUser}>
        Sign in with google popup
    </button>
    </div>
  )
}

export default Signin;