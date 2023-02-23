function solveExpression(exp) {
  var addRegex = /\+/; 
  var subRegex = /\-/; 
  var multRegex = /\*/; 
  // remember the ? will never be an operator; so the operator is always known 
  // addition 
  if (addRegex.test(exp)) {
    var arr = exp.split(/[+=]/);  // arr[0] is first number; arr[1] is second number; arr[2] is answer 
    // if question mark is in arr[0] or arr[1] 

    // if question mark is in arr[3]

  }
  //subtraction 
  if (subRegex.test(exp)) {

  }
  //multiplication 
  if (multRegex.test(exp)) {

  }

  
}



solveExpression('1+1=?'); //  2
solveExpression('123*45?=5?088'); //  6
solveExpression('-5?*-1=5?'); //  0
solveExpression('19--45=5?'); // -1
solveExpression('??*??=302?'); //  5
solveExpression('?*11=??'); // 2 
solveExpression('??*1=??'); // 2 
solveExpression('??+??=??'); // -1
