import React from "react";
// import { FaBars } from "react-icons/fa";
// import { BsFillTrashFill } from "react-icons/bs";
// import { BsFillPuzzleFill } from "react-icons/bs";
// import { useParams } from 'react-router-dom';
// import { v4 as uuidv4 } from "uuid";
import { useQuery } from '@apollo/client';
// import { ADD_PUZZLE, REMOVE_PUZZLE } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import PuzzleList from "../components/PuzzleList";
import Auth from '../utils/auth';
import PuzzleForm from '../components/PuzzleForm';
import "../styles/manage.css";

const Manage = () => {

    // const [inputList, setInputList] = useState([{ image: "", text: "" }]); 
    // const [inputList, setInputList] = useState([
    //     {
    //         id: uuidv4(),
    //         image:
    //             "https://i0.wp.com/hablamossle.com/paraprofesdeele/wp-content/uploads/2020/05/Actividades-clases-en-l%C3%ADnea.png?fit=856%2C554&ssl=1",
    //         text:
    //             "Puzzle 1",
    //         pieces: null
    //     },
    //     {
    //         id: uuidv4(),
    //         image:
    //             "https://www.avantel.co/blog/wp-content/uploads/2019/07/4.8-actividades-al-aire-libre-para-los-m%C3%A1s-citadinos-1.jpg",
    //         text: "Puzzle 2",
    //         pieces: null
    //     },
    //     {
    //         id: uuidv4(),
    //         image:
    //             "https://blog.seccionamarilla.com.mx/wp-content/uploads/2020/03/actividades-para-ninos-en-casa.jpg",
    //         text: "Puzzle 3",
    //         pieces: null
    //     }
    // ]);

    // const { username: userParam } = useParams();

    const username = Auth.getUser().data.username;

    const { loading, data } = useQuery(QUERY_USER, {
      // pass URL parameter
      variables: { username: username }
    });


    // const user = { data };

    // const { loading, data } = useQuery(QUERY_USER);
    console.log(data);

    // navigate to personal profile page if username is yours
    

    // Handle image change
    // const handleImageChange = (e, index) => {
    //     const { name } = e.target;
    //     const value = URL.createObjectURL(e.target.files[0]);
    //     const list = [...inputList];
    //     list[index][name] = value;
    //     setInputList(list);
    // };

    // Handle input change
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
    const handleAddClick = () => {
        return <PuzzleForm />;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <div className="text-title">Manage Your Puzzles</div>
            <p>You can add a new puzzle or delete an old boring ones here:</p>
            {/* The unordered list below needs to be a form */}
                        < PuzzleList data={data} />
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
