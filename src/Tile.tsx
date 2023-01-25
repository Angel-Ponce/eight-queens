import clsx from "clsx";
import { FC } from "react";
import queen from "./assets/queen.svg";

const Tile: FC<{ j: number; k: number; hasQueen: boolean }> = ({
  j,
  k,
  hasQueen,
}) => {
  return (
    <div
      className={clsx(
        "relative min-w-[56px] min-h-[56px] w-14 h-14 border flex justify-center items-center",
        j % 2 === 0
          ? k % 2 === 0 && "bg-gray-200"
          : k % 2 !== 0 && "bg-gray-200"
      )}
    >
      <span className="w-5 h-5">
        {hasQueen && <img src={queen} alt="queen" />}
      </span>
      <span className="absolute top-0 right-0 text-[8px] text-gray-500">
        {j},{k}
      </span>
    </div>
  );
};

export default Tile;
