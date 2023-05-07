// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
if (bonus>price) {
    var x = (bonus / price);
    var y = 1; 
    do {
        x = x - (y*y);
        y = y+1;  
        console.log('this is x '+x+ ' This is y '+y);
    } while (x>=(y*y)); 
    console.log(y-1)
    return (y-1); 
} else {
    return 0; 
}
}

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

beeramid(3, 4); // 0
beeramid(0, 4) // 0
beeramid(-1, 4) // 0