import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { REMOVE_PUZZLE } from "../utils/mutations";
import "../styles/puzzlelist.css";
import { useMutation } from "@apollo/client";

const PuzzleList = ({ data }) => {

    // ----------

    // console.log(data.user.puzzles);

    const [removePuzzle] = useMutation(REMOVE_PUZZLE)

    const [inputList] = useState([data.user.puzzles]);

    const puzzleArray = inputList[0];
    // const puzzleArray = puzzlesArray[0];
    console.log(puzzleArray);

    // Handle click event of the Remove button
    const handleRemoveClick = async (index) => {
        // console.log(index);



        // puzzleArray.splice();
        // setInputList(puzzleArray);


        const puzzleID = puzzleArray[index]._id; 
        console.log(puzzleID);
        try {
            await removePuzzle({ variables: { puzzleID } });
        } catch (err) {
            console.error(err);
        }
    };

    // const [removePuzzle] = useMutation(REMOVE_PUZZLE);

    // const handleClick = async (event) => {
    //     event.preventDefault();

    //     try {
    //         await removePuzzle({ variables: { ...puzzleState } });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // ----------

    return (
        <>
            <ul
                className="row puzzle-list mb-5"
                style={{ listStyle: "none" }}
            >
                {puzzleArray.map((x, index) => {
                    return (
                        <li key={index} className="col-sm-4">
                            <div className="list-card">
                                <div className="card">
                                    <img className="card-img-top list-image" src={x.img} alt="Card cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Title: {x.title}</h5>
                                        <p className="card-text">Complexity: {x.difficulty}</p>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => handleRemoveClick(index)}>
                                        <BsFillTrashFill />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )

}

export default PuzzleList;