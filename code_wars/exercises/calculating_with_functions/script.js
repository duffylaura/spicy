function zero(x) {
    if (x == null) {
        return 0;  
    } else {
       const str = '0'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}
function one(x) {
    if (x == null) {
        return 1;  
    } else {
       const str = '1'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}
function two(x) {
    if (x == null) {
        return 2;  
    } else {
       const str = '2'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}
function three(x) {
    if (x == null) {
        return 3;  
    } else {
       const str = '3'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}
function four(x) {
    if (x == null) {
        return 4;  
    } else {
       const str = '4'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}
function five(x) {
    if (x == null) {
        return 5;  
    } else {
       const str = '5'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}
function six(x) {
    if (x == null) {
        return 6;  
    } else {
       const str = '6'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}
function seven(x) {
    if (x == null) {
        return 7;  
    } else {
       const str = '7'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}
function eight(x) {
    if (x == null) {
        return 8;  
    } else {
       const str = '8'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}
function nine(x) {
    if (x == null) {
        return 9;  
    } else {
       const str = '9'.concat(x); 
       console.log(Math.floor(eval(str))); 
    }
}

function times(x) {
    const operator = '*'.concat(x); 
    return operator; 
}
function plus(x) {
    const operator = '+'.concat(x); 
    return operator;
}
function minus(x) {
    const operator = '-'.concat(x); 
    return operator;
}
function dividedBy(x) {
    const operator = '/'.concat(x); 
    return operator;
}

// Tests
seven(); 
seven(times(five())); //35 
four(plus(nine())); //13 
eight(minus(three())); // 5 
six (dividedBy(two())); // 3
eight(dividedBy(three())); // return 2 not 2.6 repeating 