import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcome.css';

const Welcome = () => {
    return(
        <div className='welcome'>
            <div className='jumbotron'>
                <div className='hero container col-4'>
                    <h1 className='hero-title display-4'>Not Puzzled Yet?</h1>
            
                    <p className='hero-paragraph'>No need to worry, you are in the right place, solving puzzles is what we do here. Are you willing to get Puzzled?</p>

                    <Link className='btn hero-btn' to='/manage'>Get Puzzled </Link>
                </div>
            </div> 
        </div>
    );
};

export default Welcome;