function getCount(str) {
    let vowelsCount = 0;
    arr = [...str]
    arr.forEach(c => {
      if (c === 'a' || c === 'e' || c === 'i' ||c === 'o' || c === 'u') {
        vowelsCount++
      }
    })
    
    return vowelsCount;
  }

  function descendingOrder(n){
    let str = n.toString()
    console.log(str)
    let arr = str.split('')
    console.log(arr)
    arr.sort((a,b) => {
      if (parseInt(a) >= parseInt(b)){
          return -1
        } else {
          return 1
        }
      })
    return parseInt(arr.join(''))
  }

  var isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))){
        return true
        }
      else {
        return false
      }
  }