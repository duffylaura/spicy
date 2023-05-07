// // split each word into individual characters 
// // first FOR LOOP, take a word and break it down into individual characters, do this for each word 
// for (let i = 0; i<words.length; i++) {
//   let letters = words[i].split(' '); 
//   let editedWords = [];
//   let editedWord = ''; 
//   console.log(letters); 

//   // second FOR LOOP 
//   for (let j = 0; j< letters.length; j++) {
//     for (p=0; p<ref.length; p++) {
//       if (letters[j] === ref[p]) {
//         letters.splice(j, 1);
//       }
//     }
//   }





  //input 'Fuck you'
  

  const ref = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  // I am recieving a string, words are separated by spaces 
  
  //split the input by spaces, store in array called words
  let words = str.trim().split(' ');  // ['Fuck', 'you']
  console.log(words); 
  let editedWords = []; 
  
  for (i=0; i<words.length; i++) {  // ['Fuck']
    let letterArray = words[i].split();
    console.log('letterArray =' + letterArray); 
  
    for (p=0; p<letterArray.length; p++) {
      for (j=0; j<ref.length; j++) {
        if (letterArray[p] == ref[j]) {
          letterArray.splice(p, 1);
        }
      }
    }
  
    editedWords.push(letterArray.join()); 
    console.log(editedWords); 
  }