import React, { useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import PuzzleList from "../components/PuzzleList";
import Auth from '../utils/auth';
import PuzzleForm from '../components/PuzzleForm';
import "../styles/manage.css";

const Manage = ({ puzzles }) => {
    if (!puzzles) {
        console.log('No Puzzles');
    }
    // const { username: userParam } = useParams();

    const username = Auth.getUser().data.username;

    const { loading, data } = useQuery(QUERY_USER, {
      // pass URL parameter
      variables: { username: username }
    });


    // const user = { data };

    // const { loading, data } = useQuery(QUERY_USER);
    console.log(data);



    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="puzzleList">
            <div className="text-title text-center">Manage Your Puzzles</div>
            <p className="text-center">You can add a new puzzle or delete an old boring ones here:</p>

            <div>
                {puzzles && 
                puzzles.map((puzzle) => (
                    <div className="card mb-3">
                        <div className="card-body">
                            <img src={puzzle.img} />
                        </div>
                        <div className="card-text">{puzzle.img}</div>
                        <div className="btn" type='submit'>Delete</div>
                    </div>
                ))}
            </div>
            {/* The unordered list below needs to be a form */}
                        < PuzzleList data={data} />
        <PuzzleForm className='mb-3' />
        </div>
    );
};

export default Manage;
