function smallEnough(a, limit){
    let nope = true
    for (let i = 0; i < a.length; i++){
      if (a[i] > limit) {nope = false}
    }
    return nope
  }