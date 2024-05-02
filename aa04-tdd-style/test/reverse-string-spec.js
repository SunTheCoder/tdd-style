const assert = require('chai')
const { expect } = require('chai')
const reverseString = require('../problems/reverse-string')

it('should return a reversed string', function(){
    // this one is storing the reverse string output in a variable then using it
    // const reversed = reverseString('fun')
    // expect(reversed).to.equal('nuf')

    // this is checking from the reversed string output in the global scope directly
    expect(reverseString('fun')).to.equal('nuf')
})
