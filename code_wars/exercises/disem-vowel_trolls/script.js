
function disemvowel(str) {

//input 'Fuck you'
// const ref = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];  

  //use split method to remove lowercase vowels 
  let a = str.split("a").join(''); 
  let e = a.split("e").join(''); 
  let i = e.split("i").join('');
  let o = i.split("o").join('');
  let u = o.split("u").join('');

  //remove upper case vowels 
  let aA = u.split("A").join(''); 
  let eE = aA.split("E").join(''); 
  let iI = eE.split("I").join('');
  let oO = iI.split("O").join('');
  let uU = oO.split("U").join('');


  console.log(uU);

  return uU; 
}


disemvowel('Fuck you ALWAYs!'); 


//Clever solution 
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }