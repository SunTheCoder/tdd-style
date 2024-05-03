const assert = require('chai')
const { expect } = require('chai')

const { returnsThree } = require('../problems/number-fun')
const { reciprocal } = require('../problems/number-fun')

describe('returnsThree', function() {
    it('Should return 3', function() {
    
        expect(returnsThree()).to.equal(3)
    }) 
})
describe('reciprocal', function() {
    it('Should return 1 divided by number', function() {

        expect(reciprocal(2)).to.equal(1/2)
    })
})





