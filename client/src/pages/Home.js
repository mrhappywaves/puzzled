import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PUZZLES } from '../utils/queries';
import PuzzleSwitcher from "../components/PuzzleSwitcher";

import '../styles/home.css';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PUZZLES);

  return (
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
              {loading ? (
                  <div>Please wait while we are loading the data...</div>
              ) : (
                  <PuzzleSwitcher data={data} />
              )}
          </div>
      </div>
  );
};

export default Home;