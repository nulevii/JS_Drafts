// const doneOrNot = (sudoku) => {
//   const testNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   for (const num in sudoku) {
//     for (const newnum in sudoku[num]) {
//       const regexp = RegExp(`${testNums[newnum]}`);

//       if (regexp.test(sudoku[num])) {
//         sudoku[num][newnum] = 0
//       }

//       console.log(num);
//       console.log(newnum)
//       console.log(testNums[newnum])

//       console.log(sudoku[num][newnum]);
//       console.log(sudoku);
//     }
//   }
//   return sudoku;
// };

// console.log(doneOrNot(
//   [[5, 3, 4, 6, 7, 8, 9, 1, 2],
//     /*[6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
// [3, 4, 5, 2, 8, 6, 1, 7, 9]*/],
// ));

// SUDOKU CHECK V1---------------------------------------------------------------------

// const doneOrNot = (sudoku) => {
//   const copiedSudoku = JSON.parse(JSON.stringify(sudoku));
//   console.log(copiedSudoku);

//   for (const num in copiedSudoku) {
//     const testNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const testNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (const newnum in copiedSudoku[num]) {
//       console.log(copiedSudoku[num].includes(testNums[newnum]))
//       if (!copiedSudoku[num].includes(testNums[newnum])) return false
//       console.log((copiedSudoku[newnum][num]))
//       let index = testNums2.indexOf(copiedSudoku[newnum][num]);
//       if (index !== -1){testNums2.splice(index, 1)}

//       console.log(testNums2)
//       console.log(index)

//       console.log(testNums2)
//     }

//     if (testNums2.length !== 0) return false
//     console.log(testNums2.length)
//   }
//   return true
// };

// console.log(doneOrNot(
//   [[5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]],
// ));

// SUDOKU CHECK V2---------------------------------------------------------------------
// const doneOrNot = (sudoku) => {
//   const copiedSudoku = JSON.parse(JSON.stringify(sudoku));
//   if (sudoku.length >= 10) { return 'Try again!'; }
//   console.log(sudoku.length)
//   copiedSudoku.forEach((num) => { console.log(num); });
//   for (const num in copiedSudoku) {
//     if (sudoku[num].length>=10){return 'Try again!'}
//     const testNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const testNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (const newnum in copiedSudoku[num]) {
//       if (!copiedSudoku[num].includes(testNums[newnum])) return 'Try again!';
//       const index = testNums2.indexOf(copiedSudoku[newnum][num]);
//       if (index !== -1) { testNums2.splice(index, 1); }
//     }

//     if (testNums2.length !== 0) return 'Try again!';
//   }
//   return 'Finished';
// };

// console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],]));

// SUDOKU CHECK V3---------------------------------------------------------------------

const doneOrNot2 = (sudoku) => {
  if (sudoku.length !== 9 || sudoku.some((item) => item.length !== 9)) { return 'Try again!'; }
  for (const ArrayNumber in sudoku) {
    const rowTestNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const columnTestNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (const ArrayValueNumber in sudoku[ArrayNumber]) {

      if (!sudoku[ArrayNumber].includes(rowTestNums[ArrayValueNumber])) return 'Try again!';
      
      const index = columnTestNums.indexOf(sudoku[ArrayValueNumber][ArrayNumber]);
      if (index !== -1) { columnTestNums.splice(index, 1); }
    }

    if (columnTestNums.length !== 0) return 'Try again!';
  }

  for (let sudokuSquareX = 0; sudokuSquareX <= 8; sudokuSquareX += 3) {
    for (let sudokuSquareY = 0; sudokuSquareY <= 8; sudokuSquareY += 3) {
      const boxTestNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let x = 0 + sudokuSquareX; x <= 2 + sudokuSquareX; x += 1) {
        for (let y = 0 + sudokuSquareY; y <= 2 + sudokuSquareY; y += 1) {
          const index = boxTestNums.indexOf(sudoku[x][y]);
          if (index !== -1) { boxTestNums.splice(index, 1); }
        }
      }
      console.log(boxTestNums);
      if (boxTestNums.length !== 0) return 'Try again!';
    }
  }

  return 'Finished!';
};

console.log(doneOrNot2([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
