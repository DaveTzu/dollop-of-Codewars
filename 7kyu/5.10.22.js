function squareDigits(num){
    return parseInt((String(num).split('').map(d => { return Math.pow(Number(d), 2)})).join(''))   
}

function disemvowel(str) {
    return (str.split('').
            filter(c =>
      c.toLowerCase() !== 'a' && c.toLowerCase() !== 'e' && c.toLowerCase() !== 'i' && c.toLowerCase() !== 'o' && c.toLowerCase() !== 'u' 
      )).join('')
  }

  function highAndLow(numbers){
    let numArr = numbers.split(' ').map(c => Number(c))
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}

function findShort(s){
    let arr = s.split(' ')
    let shortestWord = arr[0].length
    arr.forEach(w => {
      if (w.length < shortestWord){
        shortestWord = w.length
      }
    })
    return shortestWord
  }

  