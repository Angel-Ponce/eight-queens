import { FC, useState } from "react";
import { nqueens } from "$helpers";
import Board from "./Board";

const App: FC = () => {
  const [solutions] = useState<number[][][]>(nqueens());
  const [index, setIndex] = useState<number>(0);

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(solutions.length - 1);
      return;
    }

    setIndex((index) => index - 1);
  };
  const handleNext = () => {
    if (index === solutions.length - 1) {
      setIndex(0);
      return;
    }

    setIndex((index) => index + 1);
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-10 items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">Solución #{index + 1}</h1>
        <p>Angel Ponce - 201940152</p>
      </div>
      <Board solution={solutions[index]} />
      <div className="flex gap-5">
        <button
          onClick={handlePrevious}
          className="text-sm font-semibold w-28 py-2 rounded border hover:bg-gray-100 hover:scale-105 transition-all duration-150"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="text-sm font-semibold w-28 py-2 rounded border hover:bg-gray-100 hover:scale-105 transition-all duration-150"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
