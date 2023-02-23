// EXAMPLE of how code wars does tests 

// const {assert} = require('chai');

// describe('description example', function() {
//   it('pass example tests', function() {
//     let recipe = {flour: 500, sugar: 200, eggs: 1};
//     let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//     assert.equal(cakes(recipe, available), 2);
    
//     recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
//     available = {sugar: 500, flour: 2000, milk: 2000};
//     assert.equal(cakes(recipe, available), 0);
//   });
// });

const chai = require("chai");
const assert = chai.assert;

describe('find derivative of polynomial', function() {
    it('pass example tests', function() {
        let eq = '-100'; 
        assert.equal(derivative(eq), '0' || 0);

        eq = '4x+1'; 
        assert.equal(derivative(eq), '4');

        eq = 'x'; 
        assert.equal(derivative(eq), '1' || 1); 

        eq = '-x^2+3x+4';
        assert.equal(derivative(eq), '-2x+3'); 

        eq = '3x^2';
        assert.equal(derivative(eq), '6x'); 

        eq = '-4x^12';
        assert.equal(derivative(eq), '-48x^11'); 

        eq = '-3x^3+3x^2-x+10';
        assert.equal(derivative(eq), '-9x^2+6x-1'); 

        eq = 'x^4-x^3-x^2-x+7';
        assert.equal(derivative(eq), '4x^3-3x^2-2x-1'); 
    });
});
