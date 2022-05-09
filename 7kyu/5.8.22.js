function removeSmallest(numbers) {
    let nNumbers = Array.from(numbers)
    nNumbers.splice(nNumbers.indexOf(Math.min(...nNumbers)), 1)
    return nNumbers
    
  }

