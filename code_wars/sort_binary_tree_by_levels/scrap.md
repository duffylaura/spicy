function treeByLevels (rootNode) { 
    var arr = Object.values(rootNode); //this will give an array length 3 [int, node, node]
    for (i=0; i<arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            temp.push(arr[i]); 
        } 
        if (typeof arr[i] === 'object' && arr[i] !== null) {
            var y = Object.values(arr[i]); 
            console.log(y)
            treeByLevels(y);   
        }
    console.log(temp); 
}
}

// function helper (arr) {
//     for (i=0; i<arr.length; i++) {
//         if (Number.isInteger(arr[i])) {
//             temp.push(arr[i]); 
//         } 
//         if (typeof arr[i] === 'object' && arr[i] !== null) {
//             var y = Object.values(arr[i]); 
//             treeByLevels(y);   
//         }
// }
// }

//This only outputs the left most values right now 
//output is 2, 8, 1 