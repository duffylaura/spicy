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
    new Node(1,
        new Node(8,
            null,
            new Node(3)
        ),
        new Node(4,
            null,
            new Node(5,
                null,
                new Node(7)
            )
        )
    );
      
var temp = []; //build up array to return 

function treeByLevels (node) { //takes an object 
temp = []; 
if (node instanceof Node && node !== null) {
    temp.push(node.value)
    helper(node); 
    console.log(temp);
    return temp;   
} else {
    return temp; 
}
    
};
    
function helper (node) {
    if (node instanceof Node && node !== null) {
        triangle(node);
        triangle (node.left);
        triangle(node.right);
        
        triangle(node.left.left);
        triangle(node.left.right);
        
        triangle(node.right.left); 
        triangle(node.right.right);
        
        
    }

    
};
    
function triangle (node) {  
    if (node == null) {
    return; 
    }  
    if (node.left instanceof Node) {
        if (node.left.value !== null) {
            temp.push(node.left.value)
        }
    }
    if (node.right instanceof Node) {
        if (node.right.value !== null) {
            temp.push(node.right.value)
        }
    }
};
    

//treeByLevels(treeOne); 

treeByLevels(treeTwo); 
