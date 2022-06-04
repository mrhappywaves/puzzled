import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'

const NoPuzzle = () => {

    return (
        <>
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h3 className="display-4">Looks like we are out of puzzles...</h3>
                    <img className='my-1' src='https://media3.giphy.com/media/1Su0BeFy6fXXGa977m/giphy.gif?cid=790b76115466dd01274de76c8476b990b320845bb406fbdf&rid=giphy.gif&ct=g' alt='Puzzle' />
                    <p className="lead">Please <Link to='/login'>Login</Link> or <Link to='/signup'>Sign up</Link> to be able to add puzzles to our collection.</p>
                </div>
            </div>
        </>
    );

}

export default NoPuzzle;