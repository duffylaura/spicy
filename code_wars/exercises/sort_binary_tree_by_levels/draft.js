class Node { 
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left  = left;
      this.right = right;
    }
  }

const treeOne =
  new Node(2,
    new Node(8,
      new Node(1),
      new Node(3)
    ),
new Node(9,
      new Node(4),
      new Node(5)
    )
    );

var temp = []; //build up array to return 
var a; 
var b; 

function treeByLevels (rootNode) { //takes an object
    helper1(rootNode); 
    console.log(temp); //will return final array
}

function helper1 (rootNode) {
    let x = Object.values(rootNode); // [2, node, node]
    for (i=0; i<x.length; i++) {
        if (Number.isInteger(x[i])){
            temp.push(x[i]); 
        }; 
        if (typeof x[i] === 'object' && x[i] !== null) {
            a = Object.values(x[i]); 
            
            
        }
    }
 
}   

function helper2 (arr) { 
    // LEFT SIDE // A SIDE 
    // arr [0] is a  node object 

    if (arr[0] !== null && typeof arr[0] === 'object') {
        convertA(arr[0]); //convert to an array of length 3 and store in a
        if (a[0] !== null) {
            temp.push(a[0]); // push the first number
        }
        a.shift(); // shift // now an array of length two // need b to go for other side
    }

    // RIGHT SIDE // B SIDE 
    if (arr[1] !== null && typeof arr[1] === 'object') { 
        convertB(arr[1]);  //convert to an array of length 3 and store in b
        if (b[1] !== null) {
            temp.push(b[0]);
        }
        b.shift(); // shift // now an array of length two 
    }

    

}


// helper function for converting Node object to array 
// store in a and b (alternating)

function convertA(obj) {
    a = Object.values(obj); 
}

function convertB(obj) {
        b = Object.values(obj); 
}

treeByLevels(treeOne); 