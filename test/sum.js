var sum = require('../sum.js');
var expect = require('chai').expect;

describe('sum', () => {
    it('sums all its arguments', () => {
        expect( +sum(1,2,3) ).to.equal(6);
    });

    it('can chain two calls', () => {
        expect( +sum(1,2,3)(4) ).to.equal(10);
    });
})
