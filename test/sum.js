var sum = require('../sum.js');
var expect = require('chai').expect;

describe('sum', () => {
    it('sums all its arguments', () => {
        expect( +sum(1,2,3) ).to.equal(6);
    });

    it('can chain two calls', () => {
        expect( +sum(1,2,3)(4) ).to.equal(10);
    });

    it('can chain indefinitely', () => {
        expect( +sum(3)(7)(11) ).to.equal(21);
    });

    it('accepts other sum() calls', () => {
        expect( +sum(1, sum(2))(sum(2)) ).to.equal(5);
    });

    it('supports empty arguments', () => {
        expect( +sum(1)()(8) ).to.equal(9);
    });

    it('it handles negative numbers', () => {
        expect( +sum(1,2,3)(-4,1) ).to.equal(3);
    });
})
