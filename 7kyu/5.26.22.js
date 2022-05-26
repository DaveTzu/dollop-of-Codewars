function reverseWords(str) {
    let words = str.split(' ')
    let reversedWords = words.map(w => {
      let arr = w.split('')
      return arr.reverse().join('')
    })
    return reversedWords.join(' ')
    
  }