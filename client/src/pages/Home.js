import React, {useState} from 'react';
// import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <div className='container-fluid jumbotron'>
                <div className='hero container col-4'>
                    <h2 className='hero-title'>Not Puzzled Yet?</h2>
            
                    <p className='hero-paragraph'>No need to worry, you are in the right place, solving puzzles is what we do here. Are you willing to get Puzzled?</p>

                    <button className='hero-btn'>Get Puzzled</button>
                </div>
            </div> 
        </div>
    );
};

export default Home;