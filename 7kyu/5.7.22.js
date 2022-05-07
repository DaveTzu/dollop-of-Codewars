function sumTwoSmallestNumbers(numbers) {  
    let smallest = Math.min(...numbers)
    numbers.splice(numbers.indexOf(smallest),1)
    let smaller = Math.min(...numbers)
    return smallest + smaller
  }

  String.prototype.toJadenCase = function (str) {
    let arr = this.split(' ')
    return arr.map(w => {
      x = w[0].toUpperCase()
      return x + w.slice(1)
    }).join(' ')
  };

  