import { FC } from "react";
import Tile from "./Tile";

const Board: FC<{
  solution: number[][];
}> = ({ solution }) => {
  return (
    <div className="overflow-auto w-full flex justify-center">
      <div className="grid grid-cols-[repeat(8,_56px)] w-auto h-auto">
        {new Array(8)
          .fill({})
          .map((_, j) =>
            new Array(8)
              .fill({})
              .map((_, k) => <Tile key={`${j}${k}`} j={j + 1} k={k + 1}></Tile>)
          )}
      </div>
    </div>
  );
};

export default Board;
