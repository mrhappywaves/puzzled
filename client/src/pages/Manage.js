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
            <div className="wholeForm">
                <div>
                <form action="/" method="POST" enctype="multipart/form-data"></form>
                <div>
                    <label className="manageName" for="name">Name</label>
                    <input className="manageName" type="text" id="name" placeholder="Name" 
                        value="" name="name" required></input>
                </div>
                <div>
                    <label className="manageDifficulty" for="desc">Difficulty</label>
                    <div className = "manageScroll">
                        <li>noob</li>
                        <li>Human</li>
                        <li>God</li>
                    </div>
                
                </div>
                    <label className="manageUpload" for="image">Upload Image</label>
                    <input className="manageUpload" type="file" id="image" 
                        name="image" value="" required></input>
                </div>
            </div>
                <div>
                    <button className="manageGenerate" type="submit">Generate</button>
                </div>
                </div>
            
    )
};

export default Manage;