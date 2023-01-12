import React, { useState } from 'react';
import { Formik } from 'formik';
import './Login.css';
import Button from "@mui/material/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Basic = () => {
    const [showHide, setShowHide] = useState(false);
    return (
        <div className="loginPage">
            <div className='picture'></div>
            <div className='loginContainer'>
                <h1>Financial managment tool</h1>
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
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
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
                            <h3>Welcome</h3>
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
                                    {showHide ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </div>
                            </div>

                            {errors.password && touched.password && errors.password}
                            <Button type="submit" disabled={isSubmitting} className="loginSubmit">Login</Button>
                            <hr className='line' />
                        </form>
                    )}
                </Formik>
            </div>


        </div>
    );
}

export default Basic;