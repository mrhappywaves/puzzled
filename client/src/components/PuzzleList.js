import "../styles/manage.css";
import React from 'react';
import { useMutation } from "@apollo/client";
import { REMOVE_PUZZLE } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";

const PuzzleList = ({ puzzles, isLoggedIn = false }) => {
    const [removePuzzle] = useMutation(REMOVE_PUZZLE, {
        update(cache, { data: { removePuzzle } }) {
            try {
                cache.writeQuery({
                    query: QUERY_USER,
                    data: { user: removePuzzle },
                });
            } catch (e) {
                console.error(e);
            }
        }
    });

    const handleRemove = async (puzzle) => {
        try {
            await removePuzzle({
                variables: { puzzles },
            });
        } catch (err) {
            console.error(err);
        }



    }
    // const [inputList, setInputList] = useState([{ image: "", text: "" }]);

    // console.log(data.user.puzzles);

    // const handleInputChange = (e, index) => {
    //     const { name, value } = e.target;

    //     const list = [...inputList];
    //     list[index][name] = value;
    //     console.log(value);
    //     setInputList(list);
    // };

    // Handle click event of the Remove button
    // const handleRemoveClick = (index) => {
    //     console.log(index);
    //     const list = [...inputList];
    //     list.splice(index, 1);
    //     setInputList(list);
    // };

    // Handle click event of the Add button
    // const handleAddClick = () => {
    //     setInputList([...inputList, { image: "", text: "", id: uuidv4() }]);
    // };

    return (
        <div>
            <ul className="items" >
                {puzzles && 
                  puzzles.map((puzzle) => (
                      <li className="list-item">
                          <div className="item">
                              <div className="col-4">Title: {puzzle.title}</div>
                              <div className="col-4">Image Url: {puzzle.img}</div> 
                              <div className="col-2">{puzzle.difficulty}</div>
                              {isLoggedIn && (
                                  <button className="btn ml-auto"
                                    onClick={()=> handleRemove(puzzle)}
                                  > Delete </button>

                              )}
                            </div>
                        </li>
                    ))}
            </ul >
        </div>                                  
    )
};


export default PuzzleList;