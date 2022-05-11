function accum(s) {
    let newArr = s.split('').map((c, i) => {
      if(i === 0){
        return c.toUpperCase()
      }
      let str = c.repeat(i+1)
      return str
  })
    return newArr.map(c => {return c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()}).join('-')
  }

  function DNAStrand(dna){
    let arr = dna.split('')
    if(!arr){
      return dna
    }
    return arr.map(c => {
      if (c === 'A'){
        return 'T'
      } else if (c === 'T'){
        return 'A'
      } else if (c === 'G'){
        return 'C'
      } else {
        return 'G'
      }
    }).join('')
  }