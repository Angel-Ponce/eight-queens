const nqueens = () => {
  const NQUEENS = 8; //Número de reinas
  let solutions: number[] = []; //Arreglo de soluciones (reciclable)
  let result: number[][][] = []; //Resultado total de todas las soluciones con pares ordenados (x,y)

  /**
   *
   * @param vector Vector de números
   * @param value Valor a buscar dentro del vector
   * @returns Verdadero si el valor se encuentra en el arreglo, falso en caso contrario
   */
  const contains = (vector: number[], value: number) =>
    vector.indexOf(value) !== -1;

  /**
   *
   * @param k k-ésima reina visitada
   * @param col Arreglo de columnas ocupadas por las reinas
   * @param diag45 Arreglo de diagonales ocupadas por las reinas (Diagonal positiva)
   * @param diag135 Arreglo de diagonales ocupadas por las reinas (Diagonal negativa)
   */
  const queens = (
    k: number,
    col: number[],
    diag45: number[],
    diag135: number[]
  ) => {
    if (k === NQUEENS) {
      let row: number[][] = [];
      for (let j = 0; j < NQUEENS; j++) {
        row.push([j + 1, solutions[j]]);
      }
      result.push(row);
    } else {
      for (let j = 1; j <= NQUEENS; j++) {
        if (
          !contains(col, j) &&
          !contains(diag45, j - k) &&
          !contains(diag135, j + k)
        ) {
          solutions[k] = j;
          col.push(j);
          diag45.push(j - k);
          diag135.push(j + k);
          queens(k + 1, col, diag45, diag135);
          col.pop();
          diag45.pop();
          diag135.pop();
        }
      }
    }
  };

  solutions.length = NQUEENS;

  queens(0, [], [], []);

  return result;
};

export { nqueens };
