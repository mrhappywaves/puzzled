import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
// import { TbDeviceFloppy } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";
import "../styles/manage.css";

const Manage = () => {
    /* const [inputList, setInputList] = useState([{ image: "", text: "" }]); */
    const [inputList, setInputList] = useState([
        {
            id: uuidv4(),
            image:
                "https://i0.wp.com/hablamossle.com/paraprofesdeele/wp-content/uploads/2020/05/Actividades-clases-en-l%C3%ADnea.png?fit=856%2C554&ssl=1",
            text:
                "Puzzle 1",
            pieces: null
        },
        {
            id: uuidv4(),
            image:
                "https://www.avantel.co/blog/wp-content/uploads/2019/07/4.8-actividades-al-aire-libre-para-los-m%C3%A1s-citadinos-1.jpg",
            text: "Puzzle 2",
            pieces: null
        },
        {
            id: uuidv4(),
            image:
                "https://blog.seccionamarilla.com.mx/wp-content/uploads/2020/03/actividades-para-ninos-en-casa.jpg",
            text: "Puzzle 3",
            pieces: null
        }
    ]);

    // Handle image change
    // const handleImageChange = (e, index) => {
    //     const { name } = e.target;
    //     const value = URL.createObjectURL(e.target.files[0]);
    //     const list = [...inputList];
    //     list[index][name] = value;
    //     setInputList(list);
    // };

    // Handle input change
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
    const handleAddClick = () => {
        setInputList([...inputList, { image: "", text: "", id: uuidv4() }]);
    };

    return (
        <div className="App">
            <div className="text-title">Manage Your Puzzles</div>
            <p>You can add a new puzzle or delete an old boring ones here:</p>
            {/* The unordered list below needs to be a form */}
                        <ul
                            className="items"
                            style={{ listStyle: "none" }}
                        >
                            {inputList.map((x, index) => {
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
                                                    <input
                                                        name="image"
                                                        placeholder="Please paste image URL here"
                                                        value={x.image}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                        className="image input"
                                                    />

                                                    <input
                                                        name="text"
                                                        placeholder="Please enter puzzle name"
                                                        value={x.text}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                        className="input"
                                                    />
                                                    <select
                                                        name="pieces"
                                                        placeholder="Puzzle tiles"
                                                        value={null}
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

                                                    <div className="btn-box">
                                                            <button
                                                                className="button"
                                                                // TODO: THIS is important - on Submit this needs to send (add) puzzle object to the database
                                                                // TODO: onClick handle front end 
                                                                // onClick={() => handleRemoveClick(index)}
                                                            >
                                                                <BsFillTrashFill />
                                                                Add
                                                            </button>
                                                    </div>

                                                    <div className="btn-box">
                                                        {inputList.length !== 1 && (
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
                                        )}
                            )}
                        </ul>
            <button
                onClick={handleAddClick}
                style={{ marginTop: "15px" }}
                className="button"
            >
                + Add New Puzzle
            </button>
        </div>
    );
};

export default Manage;
