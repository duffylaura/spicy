function derivative(eq) {
    var linearTermRegex = /x/;
    var higherDegreeRegex = /\^/;
    var negativeTermRegex = /\-/;
    if (linearTermRegex.test(eq)) { // if there is an x anywhere in the input 
        var arr = eq.split(/(?=[+-])/);     // addition and subtraction symbols connect terms in polynomial; split up at these signs and store in an array
        var output = []; 
        for (i=0; i<arr.length; i++) {
            if (linearTermRegex.test(arr[i])) { 
                if (higherDegreeRegex.test(arr[i])) {  //terms w/ exponents > 1 
                    //now define coefficient and exponent based on if pos or negative term 
                    // negative term 
                    if (arr[i][0] === '-') { 
                        let a = arr[i].split('x^'); 
                        // the first term will be coefficient 
                        // note: could be just a minus sign 
                        if (a[0] === '-') {
                            var coefficient = parseInt(-1); 
                        } else {
                            var coefficient = parseInt(a[0]);
                        } 
                        // the second term will be the exponent 
                        var exponent = parseInt(a[1]); 
                    }
                    else {
                    // positive term 
                    let b = arr[i].split('x^'); 
                    // the first term will be coefficient 
                    // note: could be ''
                    if (b[0] === '') {
                        var coefficient = parseInt(1); 
                    } else {
                        var coefficient = parseInt(b[0]);
                    } 
                    // the second term will be the exponent 
                    var exponent = parseInt(b[1]); 
                    }
                    
                }
                else {
                    // deriv rule for linear terms (variable w/ exponent = 1)
                    var exponent = 1; 
                    let c = arr[i].split('x'); 
                    if (c[0] === '') {
                        var coefficient = parseInt(1); 
                    } else {
                        var coefficient = parseInt(c[0]); 
                    } 
                } 
                console.log('coefficient: ' + coefficient);
                console.log('exponent: ' + exponent);
                // now that coefficient and exponent have been defined, 
                // find derivative of term and push to output array 
                var newCoefficient = (exponent * coefficient);
                var newExponent = (exponent - 1); 
                // Three cases to consider when creating final term
                if (newExponent < 1) {
                    var term = newCoefficient.toString(); 
                }
                if (newExponent === 1) {
                    var term = newCoefficient + 'x'; 
                }
                if (newExponent > 1) {
                    var term = newCoefficient + 'x^' + newExponent; 
                }
                output.push(term); 
            } 
        }
    // for positive terms after the leading term need to put back in + symbol 
        for (i=1; i<output.length; i++) {
            if (!(negativeTermRegex.test(output[i]))) { 
                let d = '+' + output[i]; 
                output[i] = d; 
            }
        }
    // join together output array terms and return 
    return (output.join('')); 
  
    } 
    else {
        console.log(0);
        return 0; 
    }
}


derivative('-100');     // 0  // constant term only
derivative('4x+1');     // 4  // linear plus constant 
derivative('x');         //1 
derivative('-x^2+3x+4');  // -2x+3
derivative('x^2-3x+4'); // 2x-3
derivative('3x^2'); // 6x
derivative ('-4x^12');  // -48x^11