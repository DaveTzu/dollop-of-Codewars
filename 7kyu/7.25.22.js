function printerError(s) {
    let sArr = s.split('')
    let count = 0
    sArr.map(c => {
      if(c.charCodeAt(0) > 109) {
        count++ }
          }
        )
    return count + '/' + s.length
}