function createSpiral(size) {
    const spiral = [];
    for (let i = 0; i < size; i++) {
      spiral.push(new Array(size).fill(0));
    }
  
    let num = 1;
    let topRow = 0;
    let bottomRow = size - 1;
    let leftCol = 0;
    let rightCol = size - 1;
  
    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Fill top row
      for (let col = leftCol; col <= rightCol; col++) {
        spiral[topRow][col] = num++;
      }
      topRow++;
  
      // Fill right column
      for (let row = topRow; row <= bottomRow; row++) {
        spiral[row][rightCol] = num++;
      }
      rightCol--;
  
      // Fill bottom row
      for (let col = rightCol; col >= leftCol; col--) {
        spiral[bottomRow][col] = num++;
      }
      bottomRow--;
  
      // Fill left column
      for (let row = bottomRow; row >= topRow; row--) {
        spiral[row][leftCol] = num++;
      }
      leftCol++;
    }
  
    return spiral;
  }
  
  // Example usage:
  const size = 5;
  const spiral = createSpiral(size);
  console.log(spiral);
  