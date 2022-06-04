import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { REMOVE_PUZZLE } from "../utils/mutations";
import "../styles/puzzlelist.css";
import { useMutation } from "@apollo/client";

const PuzzleList = ({ data }) => {

    const [removePuzzle] = useMutation(REMOVE_PUZZLE)

    const [inputList, setInputList] = useState([ ...data.user.puzzles ]);

    // Handle click event of the Remove button
    const handleRemoveClick = async (index) => {

        try {
            await removePuzzle({ variables: { id: inputList[index]._id } });
        } catch (err) {
            console.error(err);
        }

        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);

    };

    return (
        <>
            <ul
                className="row puzzle-list mb-5"
                style={{ listStyle: "none" }}
            >
                {inputList.map((x, index) => {
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