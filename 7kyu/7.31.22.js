function SeriesSum(n) {
    if (n == 0){return '0.00'}
    else {
    let sum = 1, d = 1
    for (let i = 1; i < n; i++){
      d = d + 3
      sum = sum + (1/d)
      }
    return String(sum.toFixed(2))
      }
  }