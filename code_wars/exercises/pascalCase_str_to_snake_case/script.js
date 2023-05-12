function toUnderscore(pascalCase) {
    
    if (typeof pascalCase === 'number') {
      return pascalCase.toString();
    }
    
    let snakeCase = '';
       
    for (let i=0; i<pascalCase.length; i++) {
        const char = pascalCase[i];

        if (i !== 0) {
            if (char == '0') {
                snakeCase += char; 
                continue; 
            }
            if (char == '1') {
                snakeCase += char; 
                continue; 
            }
            if (char == '2') {
                snakeCase += char; 
                continue; 
            }
            if (char == '3') {
                snakeCase += char; 
                continue; 
            }
            if (char == '4') {
                snakeCase += char; 
                continue; 
            }
            if (char == '5') {
                snakeCase += char; 
                continue; 
            }
            if (char == '6') {
                snakeCase += char; 
                continue; 
            }
            if (char == '7') {
                snakeCase += char; 
                continue; 
            }
            if (char == '8') {
                snakeCase += char; 
                continue; 
            }
            if (char == '9') {
                snakeCase += char; 
                continue; 
            }
            if (char !== char.toUpperCase()) {
                snakeCase += char; 
                continue; 
            } 
            if (char === char.toUpperCase()) {
                snakeCase += '_'; 
                snakeCase += char.toLowerCase(); 
                continue; 
            }
        } else 
        {
            snakeCase += char.toLowerCase(); 
            continue; 
        }
    }

    return snakeCase;
}