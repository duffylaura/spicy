function solveExpression(exp) {
  var addRegex = /\+/; 
  var subRegex = /\-/; 
  var multRegex = /\*/; 
  var quesMarkRegex = /\?/; 
  var placeValue = {
    1: [1], 
    2: [10, 1], 
    3: [100, 10, 1], 
    4: [1000, 100, 10, 1], 
    5: [10000, 1000, 100, 10, 1], 
    6: [100000, 10000, 1000, 100, 10, 1], 
    7: [1000000, 100000, 10000, 1000, 100, 10, 1]
  }

  // remember the ? will never be an operator; so the operator is always known (or non-existant then return -1)

  // addition 
  if (addRegex.test(exp)) {
    var arr = exp.split(/[+=]/);  // arr[0] is first number; arr[1] is second number; arr[2] is answer 
    var quesPositions = []; 
    
    for (i=0; i<arr.length; i++) {
      if (quesMarkRegex.test(arr[i])) { 
        quesPositions.push(i); //This is so that I am storing the positions of term(s) w/ question marks 
      }
    }
    
    if (quesPositions.length === 0) { //no question marks present 
      if (parseInt(arr[0])+parseInt(arr[1]) === parseInt(arr[2])) {
        console.log('There was no rune in this expression and the expression is true.')
      } else {
        console.log(-1) //per the requirements, output -1 if professor is wrong 
      }
    }
    
    if (quesPositions.length === 1) { //one question mark present 
      var outputTerm = []; 
      var questionMarkPlaceValue = []; 
      
      if (quesPositions[0] === 0) { // 1st term has the mark
        let term = arr[quesPositions[0]].split(''); 
        // console.log(term); 
        for (i=0; i<term.length; i++) {
          if (!(quesMarkRegex.test(term[i]))){
          let x = term[i] * placeValue[term.length][i]; 
          outputTerm.push(x); 
          } else {
            questionMarkPlaceValue.push(i); 
          }
        }
        // console.log(outputTerm); 
        // console.log(questionMarkPlaceValue); 

        var sum = parseInt(arr[1]); 
        for (i=0; i<outputTerm.length; i++) { //add output terms together and arr[1] then subtact them from arr[2]
          sum += parseInt(outputTerm[i]); 
        }
        console.log(sum); 
        var unknown = (parseInt(arr[2]) - sum).toString().split('');
        // console.log('unknown' + unknown) 
        // console.log(questionMarkPlaceValue);
        var output = []; 
        for (i=0; i<questionMarkPlaceValue.length; i++) {
          let x = parseInt(questionMarkPlaceValue[i]); 
          output.push(unknown[x]);
        }; 
        if (output.length === 1) {
          console.log(parseInt(output[0]))
        } //else what to do if there is more than one question mark 
      }
      if (quesPositions[0]==1) { //second term has mark
        let term = arr[quesPositions[0]].split(''); 
        for (i=0; i<term.length; i++) {
          if (!(quesMarkRegex.test(term[i]))){
          let x = term[i] * placeValue[term.length][i]; 
          outputTerm.push(x); 
          } else {
            questionMarkPlaceValue.push(i); 
          }
        }
        var sum = parseInt(arr[0]); 
        for (i=0; i<outputTerm.length; i++) { //add output terms together and arr[1] then subtact them from arr[2]
          sum += parseInt(outputTerm[i]); 
        }
        var unknown = (parseInt(arr[2]) - sum).toString().split('');
        var output = []; 
        for (i=0; i<questionMarkPlaceValue.length; i++) {
          let x = parseInt(questionMarkPlaceValue[i]); 
          output.push(unknown[x]);
        }; 
        if (output.length === 1) {
          console.log(parseInt(output[0]))
        } //else what to do if there is more than one question mark 
      }
      }

    //   if (quesPositions[0]==2) { //third term has mark

    //   }   
    // }
    // if (quesPositions.length == 2) { //two question marks present 
    //   if(quesPositions[0]==0 && quesPositions[1] ==1) {  // 1 and 2

    //   }
    //   if(quesPositions[0]==0 && quesPositions[1] ==2) {  // 1 and 3

    //   }
    //   if(quesPositions[0]==1 && quesPositions[1] ==2) {  //2 and 3 

    //   }
    // }
    // if (quesPositions.length ==3) { //all three terms contain question mark s

    // }
  }

  //subtraction 
  if (subRegex.test(exp)) {

  }
  //multiplication 
  if (multRegex.test(exp)) {

  }
}

  


//Work 
solveExpression('1+1=2'); 
solveExpression('?+1=2'); //1
solveExpression('3?+123=153'); //0
// solveExpression ('??+48=98') // the output of this one is 50; but are the directions saying that ? has to equal itself (e.g. would this be a -1 because 5 does not equal zero; but if the answer was 22 then the output would be 2?)
solveExpression('40309+3?7=41006') //9 
solveExpression('1?8+30=198') //6

//In development 

// solveExpression('1+1=?'); //  2
// solveExpression('??+??=??'); //-1

// solveExpression('19--45=5?'); // -1

// solveExpression('123*45?=5?088'); //  6
// solveExpression('-5?*-1=5?'); //  0
// solveExpression('??*??=302?'); //  5
// solveExpression('?*11=??'); // 2 
// solveExpression('??*1=??'); // 2 
