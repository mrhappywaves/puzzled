import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PUZZLES } from '../utils/queries';
import PuzzleSwitcher from "../components/PuzzleSwitcher";
import NoPuzzle from '../components/NoPuzzles';
import LoadingSpinner from '../components/LoadingSpinner';

import '../styles/home.css';

const Home = () => {
    const { loading, data } = useQuery(QUERY_PUZZLES);
    const [puzzleDataState, setPuzzleDataState] = useState(false);

    // TODO: Make a proper function for loading spinner
    if (loading) {
        return <LoadingSpinner />;
    }

    const handleDataLoad = () => {

        if ([...data.puzzles].length >= 1) {
            console.log([{ data }].length);
            setPuzzleDataState(true);
        } else {
            setPuzzleDataState(false);
        }
    }

    return (
        <>
            <div onLoad={handleDataLoad}>
                {!puzzleDataState ? (
                    <NoPuzzle />
                ) : (
                    <div className='App'>
                        <div className='container'>
                            <div className='section-1'>
                                <div className='row justify-content-md-center'>
                                    <div className='col col-lg-5'>
                                        <h2 className='display-5'>Weclome to the main Puzzled Page!</h2>
                                        <p>To get puzzled by unpuzzling puzzles, please select a puzzle from the puzzle collection below</p>
                                    </div>
                                </div>
                            </div>

                            <PuzzleSwitcher data={data} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;