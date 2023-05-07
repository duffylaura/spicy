//Initially misunderstood, this is for making the whole word backwards 

// function pigIt(str){
//   var arr = str.split(" "); 
//   var output = []; 
//   for (i=0; i<arr.length; i++){
//     for (j= (arr[i].length-1); j> -1; j--) {
//       if (j>0){
//       output.push(arr[i][j])
//       } else
//       {
//         output.push(arr[i][j]+'ay');
//       }
//     }
//   }
//   console.log(output);
// }

//////////////

// It is just asking for the first letter to move to the last spot (easier)
// then add on "ay"

function pigIt(str) {
  var arr = str.split(" "); 
  var output = []; 
  const regex = /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?!]/g;

  for (i=0; i<arr.length; i++) {
      //regex to check that not a special character
      if (!(regex.test(arr[i]))) {
      let x = arr[i].split('');
      let y = x[0]; // first letter in each word
      x.splice(0,1); 
      x.push(y); 
      x.push('a'); 
      x.push('y');
      output.push(x.join(''));
      }
      else {
        output.push(arr[i])
      }
  }
 return(output.join(' ')); 
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !