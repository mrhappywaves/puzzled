import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
// import { BsFillPuzzleFill } from "react-icons/bs";
// import { useParams } from 'react-router-dom';
// import { v4 as uuidv4 } from "uuid";
// import { useQuery } from '@apollo/client';
// import { ADD_PUZZLE, REMOVE_PUZZLE } from '../utils/mutations';
// import { QUERY_USER } from '../utils/queries';
// import Auth from '../utils/auth';
import "../styles/manage.css";

const PuzzleList = ({ data }) => {
    const [inputList, setInputList] = useState([{ image: "", text: "" }]);

    console.log(data.user.puzzles);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...inputList];
        list[index][name] = value;
        console.log(value);
        setInputList(list);
    };

    // Handle click event of the Remove button
    const handleRemoveClick = (index) => {
        console.log(index);
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // Handle click event of the Add button
    // const handleAddClick = () => {
    //     setInputList([...inputList, { image: "", text: "", id: uuidv4() }]);
    // };

    return (
        <ul
            className="items"
            style={{ listStyle: "none" }}
        >
            {data.user.puzzles.map((x, index) => {
                return (
                    <li
                        className="list-item"
                    >
                        <div className="item">
                            {/* <FaBars /> */}
                            {/* <div className="img-content">
                                                        <img className="manageImage" src={x.image} alt="" />
                                                        <input
                                                            name="image"
                                                            type="file"
                                                            onChange={(e) => handleImageChange(e, index)}
                                                            className="img-input"
                                                            id="img-input"
                                                        />
                                                    </div> */}
                            <label>
                                Image:
                            <input
                                name="image"
                                placeholder="Please paste image URL here"
                                value={x.img}
                                onChange={(e) => handleInputChange(e, index)}
                                className="image input"
                            />
                            </label>
                            <label>
                                Title:
                            <input
                                name="text"
                                placeholder="Please enter puzzle name"
                                value={x.title}
                                onChange={(e) => handleInputChange(e, index)}
                                className="input"
                            />
                            </label>
                            {/* <input
                                name="image"
                                placeholder="Please paste image URL here"
                                value={x.img}
                                onChange={(e) => handleInputChange(e, index)}
                                className="image input"
                            /> */}
                            <select
                                name="pieces"
                                placeholder="Puzzle tiles"
                                value={x.difficulty}
                                onChange={(e) => handleInputChange(e, index)}
                                className="short input"
                                min="0"
                            >
                                <option value={3} selected default hidden>
                                    Complexity
                                </option>
                                <option value={2}>2x2</option>
                                <option value={3}>3x3</option>
                                <option value={4}>4x4</option>
                                <option value={5}>5x5</option>
                            </select>

                            {/* <div className="btn-box">
                                <button
                                    className="button"
                                // TODO: THIS is important - on Submit this needs to send (add) puzzle object to the database
                                // TODO: onClick handle front end 
                                // onClick={() => handleRemoveClick(index)}
                                >
                                    <BsFillPuzzleFill />
                                    Save
                                </button>
                            </div> */}

                            <div className="btn-box">
                                {data.user.puzzles.length !== 1 && (
                                    <button
                                        className="button"
                                        // TODO: THIS is important - update handle Remove click to delete the item from front end and database
                                        onClick={() => handleRemoveClick(index)}
                                    >
                                        <BsFillTrashFill />
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    </li>
                )
            }
            )}
        </ul>
    )

}

export default PuzzleList;