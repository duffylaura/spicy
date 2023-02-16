function isPangram(string){
    // alphabet reference in order of most frequently used to least according to Morse code inventor, Samuel Morse
    // https://www3.nd.edu/~busiforc/handouts/cryptography/letterfrequencies.html
    const ref = ['e', 't', 'a', 'i', 'n', 'o', 's', 'h', 'r', 'd', 'l', 'u', 'c', 'm', 'f', 'w', 'y', 'g', 'p', 'b', 'v', 'k', 'q', 'j', 'x', 'z'];
    const check = [];
    //to lowercase 
    var y = string.toLowerCase(); 
    //remove special characters use regex 
    var x = y.replace(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi, '');
    //split out spaces 
    var z = x.split(" ").join('');
    //must have at least 26 characters, i.e. 26 letters in alphabet
    if (z.length>25) {  
        ref.forEach(function(letter){
          console.log(letter);
          for (let j=0; j<z.length; j++){
            if (letter === z[j]) {
              check.push(letter);
              break;      
            }
          }
        }); 
  
    console.log(check);
  
    if (check.length !== ref.length) {
      return false}
    else {
      for (let i=0; i<check.length; i++){
        if (check[i] !== ref[i]){return false}
      } 
      return true;
    }
  
  }
  else {return false}
  }