function getDivisorsCnt(n){
    let arr = []
    for (let i = n; i > 0; i--) {
      if (n % i === 0){
        arr.push(n)
      }
    }
  return arr.length
}