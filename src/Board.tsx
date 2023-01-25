import { FC } from "react";
import Tile from "./Tile";

const Board: FC<{
  solution: number[][];
}> = ({ solution }) => {
  const tileHasQueen = (j: number, k: number) => {
    return solution.some(([peer1, peer2]) => peer1 === j && peer2 === k);
  };

  return (
    <div className="overflow-auto w-full flex justify-center">
      <div className="grid grid-cols-[repeat(8,_56px)] w-auto h-auto">
        {new Array(8)
          .fill({})
          .map((_, j) =>
            new Array(8)
              .fill({})
              .map((_, k) => (
                <Tile
                  key={`${j}${k}`}
                  j={j + 1}
                  k={k + 1}
                  hasQueen={tileHasQueen(j + 1, k + 1)}
                />
              ))
          )}
      </div>
    </div>
  );
};

export default Board;
