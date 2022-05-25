import React from 'react';
import { Link } from 'react-router-dom';
import PuzzledCard from '../components/PuzzleCard';
const MainPage = () => {


    return (
        <>
        <div className='container'>
            <div className='row'>
                <h2>Weclome to the main Puzzled Page!</h2>
                <p>To get puzzled by unpuzzling puzzles, please select a puzzle from the puzzle collection below</p>
            </div>
            <div className='row'>
                <p>Or</p>
            </div>
            <div className='row'>
                <h3>Want to create your own puzzles</h3>
                <button>Manage Puzzles</button>
            </div>
        </div>
        <div className='card-container col-12 mt-5'>
            <div className='row'>
                <div className='card col-3'>{<PuzzledCard />}</div>
                <div className='card col-3'>{<PuzzledCard />}</div>
                <div className='card col-3'>{<PuzzledCard />}</div>
                <div className='card col-3'>{<PuzzledCard />}</div>
                <div className='card col-3'>{<PuzzledCard />}</div>
                <div className='card col-3'>{<PuzzledCard />}</div>
                <div className='card col-3'>{<PuzzledCard />}</div>             

            </div>
          

        </div>
        </>


    );
};

export default MainPage;