import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUpPage = () => {
    return (
        <div className="sign-in-sign-up">
           <SignIn/>
           <SignUp/>
        </div>
    )
}

export default SignInSignUpPage;