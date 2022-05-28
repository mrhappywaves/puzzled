import React from 'react';
import FilesUploadComponent from '../components/fileUpload';
import PuzzledCard from '../components/PuzzleCard';

const Manage = () => {

    return (
        <div>
            <div className='container'>
                <div>
                    <h2 className='text-center'>Manage Puzzles</h2>
                    <h3 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                </div>
                
                <div className='container border-outline'>
                    {<PuzzledCard />}
                </div>
            </div>

            <div className='row col-12'>
                <div className='col-4'>
                        <h3>Select an image to get puzzled</h3>
                        {<FilesUploadComponent />}

                </div>

                <div className='col-4'>
                    <h3>Create Puzzle</h3>

                </div>
                <div className='col-4'>
                    <h3>Publish your new puzzle</h3>
                    <button className='btn btn-primary'>Generate Puzzle</button>
                </div>
            </div>
            
        </div>
    )
};

export default Manage;