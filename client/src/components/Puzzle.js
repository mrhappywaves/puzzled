import React from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const Puzzle = ({ data }) => {

  // TODO: Make a timer option
  // const currentTime = Date.now();

  return (
    <>
      <div className="puzzle-container">
        <JigsawPuzzle
          imageSrc={data.img}
          rows={!data.difficulty ? 3 : data.difficulty}
          columns={!data.difficulty ? 3 : data.difficulty}
          onSolved={() => alert(
            // TODO: Fix double alert 
            `YOU DID IT!`
          )}
        />
      </div>
    </>
  );
};

export default Puzzle;