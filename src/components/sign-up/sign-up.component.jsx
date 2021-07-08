import React from 'react';
import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.components';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import { Form } from 'react-bootstrap';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const { displayName,email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            });
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value});
    };

    render() {
        return(
            <div className="sign-up">
                <h2 className="title"> I do not have an account</h2>
                <span> Sign up with your email and password </span>

                <Form className="form-input">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Display Name </Form.Label>
                        <Form.Control type="text" placeholder="name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Email </Form.Label>
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Password </Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Confirm Password </Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>

                    <div className="buttons">
                        <CustomButton variant="primary" type="submit">
                            Sign up
                        </CustomButton>
                    </div>
                </Form>                
            </div>
        )
    }
}

export default SignUp;