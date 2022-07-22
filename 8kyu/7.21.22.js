function stairsIn20(s){
    let y = 0
    for (let i = 0; i < s.length; i++)
      {
        y = y + s[i].reduce((acc, n) => acc = acc + n, 0)
      }
    return y * 20
  }