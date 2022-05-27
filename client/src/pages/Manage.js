import React from 'react';
import PuzzledCard from '../components/PuzzleCard';

const Manage = () => {

    return (
        <div>
            <h2>Manage Puzzles</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            <div className='container'>
                <div>{<PuzzledCard />}</div>
            </div>
        </div>
    )
};

export default Manage;