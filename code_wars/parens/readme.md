Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true


Constraints
0 <= input.length <= 100

TDD 

validParentheses( "(" ) // false
validParentheses( ")" ) // false
validParentheses( "" )  // true
validParentheses( "()" )  // true
validParentheses( "())" )  // false


////

parens: "())(" expected: false
expected true to equal false
Completed in 2ms

parens: ")()()()(" expected: false
expected true to equal false
Completed in 1ms

parens: "(()()))(" expected: false
expected true to equal false

parens: ")()(" expected: false
expected true to equal false

parens: "())(()" expected: false
expected true to equal false
Completed in 1ms

parens: "())(()" expected: false
expected true to equal false



