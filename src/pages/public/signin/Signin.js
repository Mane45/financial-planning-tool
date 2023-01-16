import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { firestore } from "../../../firebase";
import { auth } from '../../../firebase';
import { addDoc, collection } from "@firebase/firestore";
import { Formik, Field } from 'formik';

import logo from "../../../assets/images/logo.png";
import './Signin.css';
/* eye icons */
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const Signin = () => {
    const navigate = useNavigate();
    const ref = collection(firestore, "users");
    const [showHidePass, setShowHidePass] = useState(false);
    const [showHideConfirmPass, setShowHideConfirmPass] = useState(false);

    return (<div className="loginPage">
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
                            <div className='wrapperNameSurname'>
                                <div className='wrapperName'>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        className='nameInput'
                                    />
                                </div>
                                <div className='wrapperSurname'>
                                    <label>Surname</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.surname}
                                        className='surnameInput'
                                    />
                                </div>
                            </div>
                            {/* <label>Login</label> */}
                            <label>E-mail</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className="inputStyle"
                                // placeholder="E-mail"
                            />
                            {errors.email && touched.email && errors.email}
                            {/* <label>Select you gender</label> */}
                            <div className='wrapperMaleFamel' role="group" aria-labelledby="my-radio-group">
                                <label className='male'>
                                    <Field type="radio" name="gender" value="Male" />
                                    Male
                                </label>
                                <label>
                                    <Field type="radio" name="gender" value="Female" />
                                    Female
                                </label>
                                {/* {values.gender} */}
                                {/* <div>Gender: {values.gender}</div> */}
                            </div>

                            <div className='wrapperAge'>
                                <label className='titleAge'>Please select your age</label>
                                <div className='wrapperAgeRanges'>
                                    <label className='wrapperFisrtAge'>
                                        <Field type="radio" name="age" value="0-30" />
                                        0-30
                                    </label>
                                    <label className='wrapperSecondAge'>
                                        <Field type="radio" name="age" value="31-60" />
                                        31-60
                                    </label>
                                    <label className='wrapperThirdAge'>
                                        <Field type="radio" name="age" value="61-100" />
                                        61-100
                                    </label>
                                    {/* {values.age} */}
                                </div>
                            </div>

                            <label>Password</label>
                            {/* <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className="inputStyle"
                            /> */}
                            <div className='wrapper inputStyle'>
                                <input
                                    type={showHidePass ? "text" : "password"}
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className="passworsInput"
                                />
                                <div className="showHidebtn" onClick={(e) => { setShowHidePass(!showHidePass) }}>
                                    {showHidePass ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </div>
                            </div>
                            {errors.password && touched.password && errors.password}

                            <label>Confirm Password</label>
                            {/* <input
                                type="password"
                                name="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                className="inputStyle"
                            /> */}
                            <div className='wrapper inputStyle'>
                                <input
                                    type={showHidePass ? "text" : "password"}
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    className="passworsInput"
                                />
                                <div className="showHidebtn" onClick={(e) => { setShowHidePass(!showHidePass) }}>
                                    {showHidePass ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </div>
                            </div>

                            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                            <button type="submit" disabled={isSubmitting} className="loginSubmit">
                                Login
                            </button>
                            <hr className='line' />
                            <div>
                                <span>Not a member? <Link to={'/signup'}>signup</Link></span>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    </div>)
};

// export default Login;
export default Signin;