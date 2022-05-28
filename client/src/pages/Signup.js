import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [signup, { error, data }] = useMutation(SIGNUP_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await signup({
                variables: { ...formState },
            });

            Auth.login(data.signup.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className='vh-100'>
            <div className='container h-100'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-lg-12 col-xl-11'>
                        <div className='card text-black'>
                            <div className='card-body p-md-5'>
                                <div className='row justify-content-center'>
                                    <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2'>
                                        
                                        <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign up</p>

                                        {data ? (
                                            <p>
                                                Success! You may now head{' '}
                                                <Link to="/home">back to the homepage.</Link>
                                            </p>
                                        ) : (
                                        <form onSubmit={handleFormSubmit} className='mx-1 mx-md-4'>

                                            <div className='form-group mb-2'>
                                                <label><b>Username:</b></label>
                                                <input
                                                    name='username'
                                                    type='text'
                                                    placeholder='Your Username'
                                                    id='form3Example1c'
                                                    className='form-input form-control'
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className='form-group mb-2'>
                                                <label><b>Email:</b></label>                                            
                                                <input
                                                    name='email'
                                                    type='email'
                                                    placeholder='Your Email'
                                                    id='form3Example3c'
                                                    className='form-input form-control'
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className='form-group mb-2'>
                                                <label><b>Password:</b></label>
                                                <input
                                                    name='password'
                                                    type='password'
                                                    placeholder='Your Password'
                                                    id='form3Example4c'
                                                    className='form-input form-control'
                                                    value={formState.password}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <button type='submit' className='btn btn-primary mt-3'>Sign Up</button>
                                            <hr></hr>
                                            <Link to='/login'>Already a user? Sign in.</Link>

                                        </form>
                                        )}

                                        {error && (
                                            <div className="my-3 p-3 bg-danger text-white">
                                                {error.message}
                                            </div>
                                        )}

                                    </div>
                                    <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1'>

                                        <img src='https://i0.wp.com/codemyui.com/wp-content/uploads/2017/11/gradient-colour-slide-puzzle-style-loading-animation.gif?fit=880%2C440&ssl=1'
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

export default Signup;