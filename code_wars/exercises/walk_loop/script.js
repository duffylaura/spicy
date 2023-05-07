//The wording of this kata is very confusing with the line "will of course return you to your starting point"
// It seems like a throwaway line but it is esentially in defining the problem 
// This is a ten minute LOOP walk. 
// In an abstract sense, this means that if north is walked in one direction, south must also be walked in one direction (and the same for east and west)
// Upon first read, the problem seems like it is just asking for a check of the input array length
// But, it actually wants the check of the array length AND to ensure that number "s"s and "n"s are equal AND the number of "e"s and "w"s are equal 

function isValidWalk(walk) {
  if (walk.length === 10) {
    let nCount = 0;
    let sCount = 0; 
    let wCount = 0; 
    let eCount = 0; 

    for (let i = 0; i < walk.length; i++){
      if (walk[i] === "n") {
        nCount++; 
      }
      if (walk[i] === "s") {
        sCount++; 
      }
      if (walk[i] === "e") {
        eCount++; 
      }
      if (walk[i] === "w") {
        wCount++; 
      }
    }

    if ((nCount === sCount) && (wCount === eCount)) {
      return true; 
    } else {
      return false; 
    }
   }
  else {
    return false}
}
