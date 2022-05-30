import React from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const Puzzle = ({ data }) => {

  const currentTime = Date.now();

  return (
    <>
      <div onLoad={currentTime} className="puzzle-container">
        <JigsawPuzzle
          imageSrc={data.img}
          rows={!data.difficulty ? 3 : data.difficulty}
          columns={!data.difficulty ? 3 : data.difficulty}
          onSolved={() => alert(
            // TODO: Fix double alert 
            `You solved the puzzle in ${(Date.now() - currentTime) / 1000 / 60} minutes`
          )}
        />
      </div>
    </>
  );
};

export default Puzzle;