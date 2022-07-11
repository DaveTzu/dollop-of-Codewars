
  function correctTail(body, tail) {
    let sub = body.substring(body.length - 1)
    if (sub === tail){
      return true
    }
    else {
      return false
    }