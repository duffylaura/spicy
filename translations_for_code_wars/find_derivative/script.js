function derivative(eq) {
    var arr = eq.split(/(?=[+-])/);     // addition and subtraction symbols connect terms in polynomial; split up at these signs and store in an array
    // console.log(arr);

    var linearTermRegex = /x/;
    var exponentRegex = /\^/;

    var output = []; 

    for (i=0; i<arr.length; i++) {
        if (linearTermRegex.test(arr[i])) { 
            if (exponentRegex.test(arr[i])) {  
                //deriv rule for terms w/ exponents > 1
                console.log('exponent term: '+ arr[i]); 
            }
            else {
                // deriv rule for linear terms (variable w/ exponent = 1)
                console.log('linear term:' + arr[i])
            }    
        } else {
            // rule for constant term (no variable)
            console.log('constant' + arr[i]);
        }
    }
}


derivative('-100');     // 0
derivative('4x+1');     // 4
derivative('-x^2+3x+4');  // -2x+3
derivative('x^2-3x+4'); // 2x-3