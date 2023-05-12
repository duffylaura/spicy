
function toUnderscore(pascalCase) {
    if (typeof pascalCase === 'number') {
      return pascalCase.toString();
    }
  
    const snakeCase = pascalCase.replace(/([A-Z\d])/g, '_$1').toLowerCase();
    
    console.log( snakeCase.startsWith('_') ? snakeCase.slice(1) : snakeCase );
  }

  
// Am7Days should equals am7_days 
  
toUnderscore('Am7Days'); 
// My3CodeIs4TimesBetter should equals my3_code_is4_times_better 

toUnderscore('My3CodeIs4TimesBetter'); 

// the inputs with numbers are not outputting correctly