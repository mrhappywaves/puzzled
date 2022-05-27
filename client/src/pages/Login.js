import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main className='vh-100'>
            <div className='container h-100'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-lg-12 col-xl-11'>
                        <div className='card text-black'>
                            <div className='card-body p-md-5'>
                                <div className='row justify-content-center'>
                                    <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>

                                        <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign in</p>

                                        {data ? (
                                            <p>
                                                Success! You may now head{' '}
                                                <Link to='/'>back to the homepage.</Link>
                                            </p>
                                        ) : (
                                            <form onSubmit={handleFormSubmit} className='mx-1 mx-md-4'>

                                                <div className='d-flex flex-row align-items-center mb-4'>
                                                    <i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
                                                    <div className='form-outline flex-fill mb-0'>
                                                        <input
                                                            name='email'
                                                            type='email'
                                                            placeholder='Your Email'
                                                            id='form3Example3c'
                                                            className='form-input'
                                                            value={formState.email}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className='d-flex flex-row align-items-center mb-4'>
                                                    <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                                                    <div className='form-outline flex-fill mb-0'>
                                                        <input
                                                            name='password'
                                                            type='password'
                                                            placeholder='Your Password'
                                                            id='form3Example4c'
                                                            className='form-input'
                                                            value={formState.password}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className='form-check d-flex justify-content-center mb-5'>
                                                    <Link className='login-form' to='/signup'>New user? Sign up here.</Link>
                                                </div>

                                                <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                                                    <button type='submit' className='btn btn-primary btn-lg'>Sign in</button>
                                                </div>

                                            </form>
                                        )}

                                        {error && (
                                            <div className='my-3 p-3 bg-danger text-white'>
                                                {error.message}
                                            </div>
                                        )}

                                    </div>
                                    <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>

                                        <img src='https://moreenigma.files.wordpress.com/2015/02/puzzle.jpg'
                                            className='img-fluid' alt='Login Jigsaw Puzzle'/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;