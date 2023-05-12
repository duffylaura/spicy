function whoIsWinner(piecesPositionList) {
    const grid = createEmptyGrid();
  
    for (const move of piecesPositionList) {
      const [column, color] = move.split('_');
      const colIndex = column.charCodeAt(0) - 65;
      const rowIndex = dropPiece(colIndex, color, grid);
  
      if (rowIndex !== -1 && checkWin(rowIndex, colIndex, color, grid)) {
        return color;
      }
    }
  
    return 'Draw';
  }
  
  function createEmptyGrid() {
    const grid = [];
    for (let row = 0; row < 6; row++) {
      grid[row] = Array(7).fill(null);
    }
    return grid;
  }
  
  function dropPiece(colIndex, color, grid) {
    for (let row = 5; row >= 0; row--) {
      if (grid[row][colIndex] === null) {
        grid[row][colIndex] = color;
        return row;
      }
    }
    return -1; // Invalid move, column is full
  }
  
  function checkWin(rowIndex, colIndex, color, grid) {
    return (
      checkHorizontal(rowIndex, color, grid) ||
      checkVertical(colIndex, color, grid) ||
      checkDiagonal(rowIndex, colIndex, color, grid)
    );
  }
  
  function checkHorizontal(rowIndex, color, grid) {
    const row = grid[rowIndex];
    let count = 0;
    let col = 0;
  
    while (col < 7) {
      if (row[col] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
      col++;
    }
  
    return false;
  }
  
  function checkVertical(colIndex, color, grid) {
    let count = 0;
    let row = 0;
  
    while (row < 6) {
      if (grid[row][colIndex] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
      row++;
    }
  
    return false;
  }
  
  function checkDiagonal(rowIndex, colIndex, color, grid) {
    const directions = [
      [1, -1], // Diagonal /
      [1, 1] // Diagonal \
    ];
  
    for (const [dx, dy] of directions) {
      let count = 1;
      count += countDirection(rowIndex, colIndex, color, dx, dy, grid);
      count += countDirection(rowIndex, colIndex, color, -dx, -dy, grid);
  
      if (count >= 4) {
        return true;
      }
    }
  
    return false;
  }
  
  function countDirection(rowIndex, colIndex, color, dx, dy, grid) {
    let count = 0;
    let newRow = rowIndex + dx;
    let newCol = colIndex + dy;
  
    while (
      newRow >= 0 &&
      newRow < 6 &&
      newCol >= 0 &&
      newCol < 7 &&
      grid[newRow][newCol] === color
    ) {
      count++;
      newRow += dx;
      newCol += dy;
    }
  
    return count;
  }
  