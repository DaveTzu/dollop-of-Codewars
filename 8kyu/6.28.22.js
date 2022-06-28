
  function remove (string) {
    if (string[string.length - 1] === '!') {
      console.log(string)
      return string.substring(0,string.length - 1)
    } else {
      return string
    }
  }