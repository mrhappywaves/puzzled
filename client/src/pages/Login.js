import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    // });

    // const [error, setError] = useState(null);

    // const handleChange = (event) => {
    //     const newFormData = { ...formData, [event.target.name]: event.target.value };
    //     setFormData(newFormData);
    // };

    // const setTokenToLocalStorage = (token) => {
    //     window.localStorage.setItem('token', token);
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    // }

    return (
        <div className='login-form card'>
           <div className='card-title'>
               <h2>Login</h2>
           </div>
           <div className='cardbody'>
               <form className='form-group mb-3'>
                   <label className='mb-1'>Email:</label>
                   <br></br>
                   <input type='text' placeholder='example@test.com'></input>
               </form>
               <form className='form-group mb-3'>
                   <label className='mb-1'>Password:</label>
                   <br></br>
                   <input type='password' placeholder='Password'></input>
               </form>
               <button type='submit' className='mt-2'>Login</button>
           </div>
            <div>
                <Link className='signup-form' to='/signup'>New user? Sign up here.</Link>
            </div>
        </div>
    );
};

export default Login;