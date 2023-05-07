function solution(number){
  var arr = []; // container for list of numbers we will sum at the end 
  if (number > 0){
    for (i=(number-1); i>0; i--){
      if (i%3 === 0) {arr.push(i)}; // modulus operator. %, returns remainder; if multiple of 3 or 5 then evenly divided by 3 or 5 (i.e. remainder = 0)
      if ((i%5 ===0) && (i%3 != 0)) {arr.push(i)} // use && to rule out double counting 
    }
  console.log(arr); 
   //sum an array using reduce method by picking initialvalue of 0 
  const initialValue = 0;
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); 
  console.log(sum); 
  return sum; 
  }
  else { return 0}
}

solution(10);


// Clever solution 
// function solution(number){
//   var sum = 0;
  
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }