




// function compareObjects(obj1, obj2) {
//   // Iterate over the properties of obj1
//   for (let prop1 in obj1) {
//     // Check if the property exists in obj2
//     if (obj2.hasOwnProperty(prop1)) {
//       // Compare the values of the properties
//       if (obj1[prop1] !== obj2[prop1]) {
//         return false; // Properties don't match, return false
//       }
//     } else {
//       return false; // Property doesn't exist in obj2, return false
//     }
//   }
//   return true; // All properties match, return true
// }

function cakes(obj1, obj2) {
  // create an empty array to count amounts
  var counter = []; 
  // Iterate over the properties of recipe object 
  for (let prop1 in obj1) {
    // Check if the property exists in available object 
    if (obj2.hasOwnProperty(prop1)) {
      if (obj2[prop1] >= obj1[prop1]) { 
        counter.push(obj2[prop1]/obj1[prop1]); 
      }
      else {
        // don't have enough of one ingredient; return 0 
        return 0; 
      }
    }
    else {
      // property doesn't exist in available; return 0 
      return 0; 
    }
  }

  // If get to this point, then have enough of every ingredient to make at least 1
  // Use counter array to determine least amount of iterations of recipe can make 
  // iterate through counter array; find smallest number (Math.min())
  // then round, but must round down so use Math.floor 

  return (Math.floor(Math.min(...counter)));

}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 

cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})