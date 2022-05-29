import React, { useEffect } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const Puzzle = ({ data }) => {
  console.log(data.image);
  useEffect(() => {
    console.log(data.title);
  });

  const currentTime = Date.now();

  return (
    <>
      <div onLoad={currentTime} className="puzzle-container">
        <JigsawPuzzle
          imageSrc={data.image}
          rows={!data.pieces ? 3 : data.pieces}
          columns={!data.pieces ? 3 : data.pieces}
          onSolved={() => alert(
            // TODO: Need to get time on start. Then need to take out that time from the Date.now and divide by 1000 to get the time score
            `You solved the puzzle in ${(Date.now() - currentTime) / 1000 / 60} minutes`
          )}
        />
      </div>
    </>
  );
};

export default Puzzle;