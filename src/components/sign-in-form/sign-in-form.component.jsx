import React, { useState} from "react";
import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";

const defaultInput = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formField, setFormField] = useState(defaultInput);
  const { email, password } = formField;

  const navigate = useNavigate();

  //   useEffect(() => {
  //     (async () => {
  //       const response = await getRedirectResult(auth);

  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //         console.log(userDocRef);
  //       }
  //     })();
  //   }, []);

  const resetFormFields = () => {
    setFormField(defaultInput);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      navigate("/");
      
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password, please try again");
          break;
        case "auth/user-not-found":
          alert("User not found. Please sign up");
          break;
        default:
          console.log("Error signing in user", error);
      }
    }
  };

  const signInWithGoogleUser = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-in-form">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="sign-in-button-container">
          <Button type="submit">Sign in</Button>
          <Button
            buttonType="google"
            type="button"
            onClick={signInWithGoogleUser}
          >
            Google Sign In
          </Button>
        </div>
      </form>
      {/* <Button onClick={signInWithGoogleRedirect}>
      Sign in with Google Redirect
    </Button>
   */}
    </div>
  );
};

export default SignInForm;
