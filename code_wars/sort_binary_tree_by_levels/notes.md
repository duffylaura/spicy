This is what the inputs will be looking like 

```
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
```

This tree looks like... 
                 2
            8        9
          1  3     4   5


// output should be [2,8,9,1,3,4,5]

[2, 8, 9, 8, 1, 3, 1, 3, 9, 4, 5, 4, 5]

----

rootNode.value = 2

------
rootNode.left.value = 8

rootNode.left.left.value = 1 

rootNode.left.right.value = 3 

-------

rootNode.right.value = 9 

rootNode.right.left.value = 4

rootNode.right.right.value = 5 