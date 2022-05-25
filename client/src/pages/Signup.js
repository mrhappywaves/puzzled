import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  

    return (
        <div className='signup-form card'>
           <div className='card-title'>
               <h2>Sign Up</h2>
           </div>
           <div className='cardbody'>
               <form className='form-group mb-3'>
                   <label className='mb-1'>Username:</label>
                   <br></br>
                   <input type='text' placeholder='Username'></input>
               </form>
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
               <button type='submit' className='m-2'>Sign Up</button>
           </div>
            <div>
                <Link className='login-form' to='/login'>Already a user? Sign in.</Link>
            </div>
        </div>
    );
};

export default Signup;