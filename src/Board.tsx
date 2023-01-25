import { FC } from "react";

const Board: FC<{
  solution: number[][];
}> = ({ solution }) => {
  return <>{JSON.stringify(solution)}</>;
};

export default Board;
