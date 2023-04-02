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

    const treeTwo =
    new Node(2,
      new Node(8,
        new Node(1),
        new Node(3, 
            new Node (12),
            new Node (14)
      )),
      new Node(9,
        new Node(4),
        new Node(5)
      )
      );

var temp = []; //build up array to return 

function treeByLevels (node) { //takes an object 
    temp.push(node.value);
    if (node instanceof Node && node !== null) {
        triangle(node)
        triangle (node.left)
        triangle(node.right)
    } 
    console.log(temp); 
}

function triangle (node) {
    
    if (node.left instanceof Node) {
        temp.push(node.left.value)
    }
    if (node.right instanceof Node) {
        temp.push(node.right.value)
    }
}



treeByLevels(treeOne); 
 



// function treeByLevels (rootNode) { //takes an object 
//     temp.push(rootNode.value);
//     if (rootNode.left !== null) {
//         temp.push (rootNode.left.value)
//         if (rootNode.right !== null) {
//             temp.push(rootNode.right.value); 
//         }
//     }
//     if (rootNode.left instanceof Node) {
//         treeByLevels(rootNode.left);
//     }
//     if (rootNode.right instanceof Node) {
//         treeByLevels(rootNode.right)
//     }
//     console.log(temp); 
// }
