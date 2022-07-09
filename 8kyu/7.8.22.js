function xor(a, b) {
    if (a === true && b === true) {
      return false
    }
    return (a || b)
  }