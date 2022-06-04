import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import PuzzleList from "../components/PuzzleList";
import Auth from '../utils/auth';
import PuzzleForm from '../components/PuzzleForm';
import { Navigate } from 'react-router-dom';
import "../styles/manage.css";

const Manage = () => {

    if (!Auth.isLoggedIn()) {
        return <Navigate to="/login" />;
    }

    const username = Auth.getUser().data.username;

    const { loading, data } = useQuery(QUERY_USER, {
        // pass URL parameter
        variables: { username: username }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="puzzleList">
                <div className="text-title text-center">Manage Your Puzzles</div>
                <p className="text-center">You can add a new puzzle or delete an old boring ones here:</p>
                <PuzzleForm />
                <PuzzleList data={data} />
            </div>
        </>
    );
};

export default Manage;
