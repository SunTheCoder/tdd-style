function reverseString(string) {
  if (typeof string !== 'string') {
    throw TypeError('Argument is not a string.')
  }
  return string.split('').reverse().join('')
};

reverseString('fun')
//reverseString(9)

// try {
//   reverseString
// } catch (error) {
//   TypeError('Argument is not a string.')
// }

module.exports = reverseString
