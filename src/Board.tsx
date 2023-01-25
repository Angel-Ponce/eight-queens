import { FC, useState } from "react";
import Tile from "./Tile";

const Board: FC<{
  solution: number[][];
}> = ({ solution }) => {
  const [selectedTile, setSelectedTile] = useState<number[]>([]);

  const tileHasQueen = (j: number, k: number) => {
    return solution.some(([peer1, peer2]) => peer1 === j && peer2 === k);
  };

  const tileIsDangerous = (j: number, k: number) => {
    if (selectedTile.length === 2) {
      const sameRow = j === selectedTile[0];
      const sameCol = k === selectedTile[1];
      let sameDiagonal45 = false;
      let sameDiagonal135 = false;

      [1, 2, 3, 4, 5, 6, 7, 8].forEach((i) => {
        if (sameDiagonal45) return;

        sameDiagonal45 = i + selectedTile[0] === j && selectedTile[1] + i === k;

        if (sameDiagonal45) return;

        sameDiagonal45 = selectedTile[0] - i === j && selectedTile[1] - i === k;
      });

      [1, 2, 3, 4, 5, 6, 7, 8].forEach((i) => {
        if (sameDiagonal135) return;

        sameDiagonal135 =
          selectedTile[1] + i === k && selectedTile[0] - i === j;

        if (sameDiagonal135) return;

        sameDiagonal135 =
          selectedTile[1] - i === k && selectedTile[0] + i === j;
      });

      return (
        !(sameRow && sameCol) &&
        (sameRow || sameCol || sameDiagonal45 || sameDiagonal135)
      );
    }

    return false;
  };

  return (
    <div className="overflow-auto w-full flex justify-center">
      <div className="grid grid-cols-[repeat(8,_56px)] w-auto h-auto">
        {new Array(8).fill({}).map((_, j) =>
          new Array(8).fill({}).map((_, k) => {
            return (
              <Tile
                key={`${j}${k}`}
                j={j + 1}
                k={k + 1}
                hasQueen={tileHasQueen(j + 1, k + 1)}
                setSelectedTile={setSelectedTile}
                isDangerous={tileIsDangerous(j + 1, k + 1)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Board;
