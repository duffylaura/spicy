function moveZeros(arr) {
  var zeros = []; 
  for (i=0; i<arr.length; i++){
      if (Number.isInteger(arr[i]) && arr[i] === 0) { //must be strict equal AND be an integer 
        zeros.push(0); //add 0 to zeros array 
        arr.splice(i, 1); //splice out 
        i--; //decrement i to account for the removed element
    }
  }
  if (zeros.length >= 1) {
    const output = arr.concat(zeros); 
    return output; 
  } else {
    return arr; 
  }
}