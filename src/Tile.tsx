import clsx from "clsx";
import { FC } from "react";

const Tile: FC<{ j: number; k: number }> = ({ j, k }) => {
  return (
    <div
      className={clsx(
        "min-w-[56px] min-h-[56px] w-14 h-14 border",
        j % 2 === 0
          ? k % 2 === 0 && "bg-gray-200"
          : k % 2 !== 0 && "bg-gray-200"
      )}
    ></div>
  );
};

export default Tile;
