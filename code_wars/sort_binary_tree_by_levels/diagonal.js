/// This outputs [2, 8, 1, 3, 9, 4, 5]

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

var temp = []; 

function treeByLevels (rootNode) { //takes an object
    firstHelper(rootNode); 
    console.log(temp); 
}

function firstHelper (rootNode) {
    var objToArr = Object.values(rootNode); //this will give an array length 3 [int, node, node]
    helper(objToArr);
}
function helper (arr) { //take an array 
    arr.forEach(function(item){
        if (Number.isInteger(item)){
            temp.push(item); 
        }
        if (typeof item === 'object' && item !== null) {
            firstHelper(item)
        }
    })

}


treeByLevels(treeOne); 