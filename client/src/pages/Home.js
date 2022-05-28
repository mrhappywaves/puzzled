import React from 'react';
import { Link } from 'react-router-dom';
import PuzzledCard from '../components/PuzzleCard';
import '../styles/home.css';
const Home = () => {

    return (
        <>
        <div className='container m-5'>

            <div className='section-1'>
                <div className='row justify-content-md-center'>
                    <div className='col col-lg-5'>
                        <h2 className='display-5'>Weclome to the main Puzzled Page!</h2>
                        <p>To get puzzled by unpuzzling puzzles, please select a puzzle from the puzzle collection below</p>
                        <p className='text-center'><b>Or</b></p>
                    </div>
                </div>

                <div className='row justify-content-md-center'>
                    <div className='col col-lg-5 mx'>
                        <h3>Want to Create your own puzzles?</h3>
                        <Link to='/manage' className='btn manage-btn'>Manage Puzzles</Link>
                    </div>
                </div>

            </div>

            <div className='card-container mt-5' >
               {<PuzzledCard />}
            </div>
            
        </div>
       
        </>
    );
};

export default Home;