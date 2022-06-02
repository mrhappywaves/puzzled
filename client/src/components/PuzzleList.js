import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import "../styles/puzzlelist.css";

const PuzzleList = ({ data }) => {

    // Handle click event of the Remove button
    const handleRemoveClick = (index) => {
        console.log(index);
    };

    return (
        <>
            <ul
                className="row puzzle-list mb-5"
                style={{ listStyle: "none" }}
            >
                {data.user.puzzles.map((x, index) => {
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