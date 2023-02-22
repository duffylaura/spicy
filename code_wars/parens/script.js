// function validParentheses(parens) {
//   var leftCounter = 0; 
//   var rightCounter = 0; 
//   var arr = parens.split(''); 

//   if (arr[0] === ")") {return false}; 
//   if (arr[(arr.length-1)] === "(") {return false};

//   for (i=0; i<arr.length; i++) {
//     if (arr[i] === "("){
      
//       leftCounter++
//     }
//     if(arr[i] === ")" && arr[i+1] != "("){
//       rightCounter++
//     }
//     if(arr[i] === ")" && arr[i+1] === "("){
//       return false; 
//     }
//   }

//   if (leftCounter === rightCounter) {console.log(true); return true}
//   else {console.log(false); return false}
// }

/////////////////////////////////////////

//// New approach --> track difference instead of lefts and rights 

// function validParentheses(parens) {
//   var difference = 0;
//   var arr = parens.split('');

//   if (arr[0] === ")") {return false}; 
//   if (arr[(arr.length-1)] === "(") {return false};

//   for (i=0; i<arr.length; i++) {
//     if (arr[i] === "(") {
//       difference++;
//     } else if (arr[i] === ")") {
//       difference--;
//     } 
//   }

//   if (difference != 0) {return false}
//   else {return true}
// }

//// New approach #2 

function validParentheses(parens) {
  const regexNoParens = /[^()]/; 
  const regexClose = /\)/;
  const regexOpen = /\(/;

  var counter = 1; 

  if (regexNoParens.test(parens) || parens === ""){
    console.log(true)
    return true
  }

  var arr = parens.split('');

  if (regexClose.test(arr[0])) {
    console.log(false); 
    return false; 
  }

  for (i=0; i<arr.length; i++){
    if (regexOpen.test(arr[i])) {
      if (typeof arr[i+1] !== 'undefined') {
        for (j=(i+1); j<(arr.length-i); j++) {
          if (regexClose.test(arr[j])) {
            counter--;
            break;  
          } else {
            counter++; 
            break; 
          }
        }
      }
      if (typeof arr[i+1] === 'undefined') {
        counter++; 
      }
    }
    if(regexClose.test(arr[i])) {
      if (typeof arr[i-1] !== 'undefined') {
        for (j=(i-1); j> -1; j--) {
          if (regexOpen.test(arr[j])) {
            counter--;
            break;  
          } else {
            counter++; 
            break; 
          }
        }
    }
  }

  if (counter === 0) {
    console.log(true)
    return true
  } 
  else {
    console.log(false)
    return false
  }
} 
}



validParentheses( "(" ) // false
validParentheses( ")" ) // false
validParentheses( "" )  // true
validParentheses( "()" )  // true
validParentheses( "())" )  // false

// not working // all below should return false

validParentheses("())(");
validParentheses(")()()()(");
validParentheses("(()()))(");
validParentheses(")()(");
validParentheses("())(()"); 
validParentheses("())(()");

