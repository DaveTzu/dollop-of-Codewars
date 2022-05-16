function isIsogram(str){
    let checkArr = str.split('')
    let isIt = true
    checkArr.forEach((c, ind) => {
      for (let i = 0; i < checkArr.length; i++){
        if (c.toLowerCase() == checkArr[i] && i != ind){
          console.log(c + ' ' + checkArr[i])
          isIt = false
        }
      }
    })
    return isIt
  }

  function maskify(cc) {
    let str = '#'
    let arrLength = cc.split('').length - 4
    console.log(arrLength)
    if (arrLength <= - 1 ){
      return cc.split('').slice(-4).join('')
    } else if(arrLength < 0){
      return str + cc.split('').slice(-4).join('')
    } else {
    return  str.repeat(arrLength) + cc.split('').slice(-4).join('')
    }
  }

  function nbYear(p0, percent, aug, p) {
    let years = 0
    let pop = p0
    while (p > pop){
      pop = Math.floor(pop + ( pop * (percent / 100 ) ) + aug)
      years++
    }
  console.log(pop + '  ' + p)
  return years
}
  