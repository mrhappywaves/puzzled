import React, { useEffect } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import '../styles/puzzle.css'

const Puzzle = ({ data }) => {
    console.log(data.title);
    useEffect(() => {
        console.log("This is a test for useEffect within Puzzle");
    });

    const currentTime = Date.now();

    return (
        <div onLoad={currentTime} className="puzzleGame">
            <h3 className="puzzleTitle">{data.title}</h3>
            {/* Puzzle can be styled using .jigsaw-puzzle class */}
            <div className='container'>
                <JigsawPuzzle
                    // TODO: Remove Ternary operators below when code is complete
                    imageSrc={!data.image ? "https://upload.wikimedia.org/wikipedia/commons/0/0f/Nyhavn_5-15%2C_Kbh_2020.jpg" : data.image}
                    rows={!data.pieces ? 3 : data.pieces}
                    columns={!data.pieces ? 3 : data.pieces}
                    onSolved={() => alert(
                        // TODO: Need to get time on start. Then need to take out that time from the Date.now and divide by 1000 to get the time score
                        `You solved the puzzle in ${(Date.now() - currentTime) / 1000}`
                    )}
                />
            </div>
        </div>

    );
};

export default Puzzle;