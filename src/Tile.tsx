import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, Dispatch, SetStateAction } from "react";
import queen from "./assets/queen.svg";

const Tile: FC<{
  j: number;
  k: number;
  hasQueen: boolean;
  setSelectedTile: Dispatch<SetStateAction<number[]>>;
  isDangerous: boolean;
}> = ({ j, k, hasQueen, setSelectedTile, isDangerous }) => {
  return (
    <motion.div
      initial={{
        y: "-80%",
        opacity: 0,
      }}
      animate={{
        y: "0%",
        opacity: 1,
      }}
      transition={{ duration: (j + k) * 0.15 }}
    >
      <div
        className={clsx(
          "relative min-w-[56px] min-h-[56px] w-14 h-14 border flex justify-center items-center cursor-pointer select-none transition-colors duration-150",
          j % 2 === 0
            ? k % 2 === 0 && "bg-gray-200"
            : k % 2 !== 0 && "bg-gray-200",
          isDangerous && "!bg-red-200"
        )}
        onClick={() => {
          if (hasQueen) {
            setSelectedTile((prev) => {
              if (prev.length === 2 && prev[0] === j && prev[1] === k) {
                return [];
              }
              return [j, k];
            });
            return;
          }

          setSelectedTile([]);
        }}
      >
        <span className="w-5 h-5">
          {hasQueen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img src={queen} alt="queen" />
            </motion.div>
          )}
        </span>
        <span className="absolute top-0 right-0 text-[8px] text-gray-500">
          {j},{k}
        </span>
      </div>
    </motion.div>
  );
};

export default Tile;
