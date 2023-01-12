import React  from 'react';
import { Formik } from 'formik';
import './Login.css';

const Login = () => (
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
                    </form>
                )}
            </Formik>
        </div>


    </div>
);

export default Login;