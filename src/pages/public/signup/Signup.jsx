import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { firestore } from "../../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { Formik } from 'formik';

import logo from "../../../assets/images/logo.png";
import './Signup.css';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';


const Login = () => {
    const ref = collection(firestore, "users");
    const navigate = useNavigate();
    const [showHide, setShowHide] = useState(false);

    return (<div className="loginPage">
        <div className='picture'></div>
        <div className='loginContainer'>
            <div className='loginContent'>
                <div className='logoContainer'>
                    <img src={logo} alt="logo"></img>
                </div>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '' }}
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
                        await createUserWithEmailAndPassword(auth, values.email, values.password)
                            .then((userCredential) => {
                                const user = userCredential.user;
                                console.log(user);
                                navigate("/signin")
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
                            {/* <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className="inputStyle"
                            /> */}
                            <div className="inputStyle" id="passwordDiv">
                                <input
                                    type={showHide ? "text" : "password"}
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className="passworsInput"
                                />
                                <div className="showHidebtn" onClick={(e) => { setShowHide(!showHide) }}>
                                    {showHide ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </div>
                            </div>
                            {errors.password && touched.password && errors.password}

                            <label>Confirm Password</label>
                            <input
                                    type="password"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    className="inputStyle"
                                />
                            
                            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}


                            <button type="submit" disabled={isSubmitting} className="loginSubmit">
                                Register
                            </button>
                            <hr className='line' />
                            <div>
                                <span>Already have an account? <Link to={'/signin'}>signin</Link></span>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    </div>)
};

export default Login;