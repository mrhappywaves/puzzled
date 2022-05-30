import React, { useState } from "react";
import Puzzle from "./Puzzle";

const PuzzleSwitcher = ({ data }) => {
  const [location, setLocation] = useState(0);

  const handleNextItem = (e) => {
    if (location + 1 < data.length) {
      setLocation(location + 1);
      console.log(location, data.length);
    }
  };

  const handlePreviousItem = () => {
    if (location !== 0) {
      setLocation(location - 1);
    }
  };

  return (
    <>
      {data.map((item, index) => (
        <div className={location === index ? "block text-center" : "hidden"} key={index}>
          <Puzzle data={item} />
          <div className="flex justify-center items-center my-4">
            <div className="bg-black text-white p-4 rounded h-min cursor-pointer" onClick={handlePreviousItem}>←</div>
            <div className="p-4">{`${index + 1} of ${data.length}`}</div>
            <div className="bg-black text-white p-4 rounded h-min cursor-pointer" onClick={handleNextItem}>→</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PuzzleSwitcher;