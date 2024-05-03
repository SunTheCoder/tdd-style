function returnsThree() {
  return 3
}

function reciprocal(n) {
  if(n < 1 || n > 1000000){
    throw RangeError('Number exceeds range')
  }
  return 1/n
}

reciprocal(-1)

//returnsThree()

// since theres more than one export it has to be done in an obj
module.exports = {
  returnsThree,
  reciprocal
};
