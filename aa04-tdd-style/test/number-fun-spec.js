const assert = require('chai')
const { expect } = require('chai')

// this is the import destructured into an obj because it was exported as an obj
const { returnsThree } = require('../problems/number-fun')
const { reciprocal } = require('../problems/number-fun')

// describe is used to give the the the test a header
describe('returnsThree', function() {
    // this will appear under the test case above indented like a sub category
    it('Should return 3', function() {

        expect(returnsThree()).to.equal(3)
    })
})
describe('reciprocal', function() {
    it('Should return 1 divided by number', function() {

        expect(reciprocal(2)).to.equal(1/2)
        expect(reciprocal(3)).to.equal(1/3)
        expect(reciprocal(4)).to.equal(1/4)
    })
    it('Should return 1 divided by number if number is valid', function() {

        expect(reciprocal(2)).to.equal(1/2)
        expect(reciprocal(3)).to.equal(1/3)
        expect(reciprocal(4)).to.equal(1/4)
    })
    it('Should return invalid if number exceeds range', function() {

        let bound1 = reciprocal.bind(null, -1)
        let bound2 = reciprocal.bind(null, 1000001)

        
            expect(bound1).to.throw(RangeError)
            expect(bound2).to.throw(RangeError)

    })
})
