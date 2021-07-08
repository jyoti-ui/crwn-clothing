import React from 'react';
import './sign-in.styles.scss';
import { Form } from 'react-bootstrap';
import CustomButton from '../custom-button/custom-button.components';
import {SignInWithGoogle} from '../../firebase/firebase.utils';

// import FormInput from '../form-input/form-input.components';


class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email :"",
            password : ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email:"", password:""})
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({[name] : value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span><br /><br />

                <Form className="form-input">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>

                    <div className="buttons">
                        <CustomButton variant="primary" type="submit">
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>
                </Form>                

                {/* <FormInput onSubmit={this.handleSubmit}>
                    <label> Email </label>
                    <input 
                        name="email" 
                        type="email"
                        handleChange={this.handleChange}
                        label="Email"
                        value={this.state.email} 
                        required 
                    />

                    <label> Password </label>
                    <input 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange}
                        required 
                    />

                    <input type="submit" value="Submit Form" />
                </FormInput> */}
            </div>
        )
    }
}

export default SignIn;