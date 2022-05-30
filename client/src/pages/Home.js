import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import PuzzleSwitcher from "../components/PuzzleSwitcher";
import '../styles/home.css';
const Home = () => {

    // eslint-disable-next-line
    const [inputList, setInputList] = useState([
        {
          id: uuidv4(),
          image:
            "https://i0.wp.com/hablamossle.com/paraprofesdeele/wp-content/uploads/2020/05/Actividades-clases-en-l%C3%ADnea.png?fit=856%2C554&ssl=1",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          pieces: null
        },
        {
          id: uuidv4(),
          image:
            "https://www.avantel.co/blog/wp-content/uploads/2019/07/4.8-actividades-al-aire-libre-para-los-m%C3%A1s-citadinos-1.jpg",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          pieces: null
        },
        {
          id: uuidv4(),
          image:
            "https://blog.seccionamarilla.com.mx/wp-content/uploads/2020/03/actividades-para-ninos-en-casa.jpg",
          text: "",
          pieces: null
        }
      ]);

    return (
        <div className='App'>
            <div className='container'>
                <div className='section-1'>
                    <div className='row justify-content-md-center'>
                        <div className='col col-lg-5'>
                            <h2 className='display-5'>Weclome to the main Puzzled Page!</h2>
                            <p>To get puzzled by unpuzzling puzzles, please select a puzzle from the puzzle collection below</p>
                        </div>
                    </div>
                </div>
                <PuzzleSwitcher data={inputList} />
            </div>

        </div>
    );
};

export default Home;