import React  from 'react';
import {Link} from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { firestore } from "../../../firebase";
import { auth } from '../../../firebase';
import { addDoc, collection } from "@firebase/firestore";
import { Formik } from 'formik';

import logo from "../../../assets/images/logo.png";
import './Signin.css';

const Login = () => {
    const navigate = useNavigate();
    const ref = collection(firestore, "users");


return ( <div className="loginPage">
            <div className='picture'>
            </div>
            <div className='loginContainer'>
                <div className='loginContent'>
                    <div className='logoContainer'>
                        <img src={logo} alt="logo"></img>
                    </div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            setSubmitting(false);
                            signInWithEmailAndPassword(auth, values.email, values.password)
                            .then((userCredential) => {
                                const user = userCredential.user;
                                console.log(user);
                                navigate("/home")
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log(errorCode, errorMessage);
                            });
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit} className="loginForm">

                                <label>Login</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className="inputStyle"
                                />
                                {errors.email && touched.email && errors.email}

                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className="inputStyle"
                                />
                                {errors.password && touched.password && errors.password}

                                <button type="submit" disabled={isSubmitting} className="loginSubmit">
                                    Login
                                </button>
                                <hr className='line'/>
                                <div>
                                    <span>Not a member? <Link to={'/signup'}>signup</Link></span>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div> )
};

export default Login;