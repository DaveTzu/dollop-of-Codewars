function findNextSquare(sq) {
    if (!Number.isInteger(Math.sqrt(sq))) {
      return -1
    }
    let x = sq + 1 
    while (!Number.isInteger(Math.sqrt(x))) {
      x++
    }
  return x
}

const binaryArrayToNumber = arr => {
    let x = arr.join('')
    return parseInt(x, 2)
};

