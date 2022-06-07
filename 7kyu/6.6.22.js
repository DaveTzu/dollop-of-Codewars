function gimme (triplet) {
    let summed = triplet.indexOf(Math.max(...triplet)) + triplet.indexOf(Math.min(...triplet))
    if (summed === 3){
        return 0
        } else if (summed === 2) {
        return 1
    } else {
      return 2
    }
  }