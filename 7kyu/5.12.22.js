function getSum( a,b )
{
   if (a === b) { return a}
  let arr = []
  for(let i = Math.min(a, b); i <= Math.max(a,b); i++){
    arr.push(i)
  }
  return arr.reduce((acc, n) => acc = acc + n, 0)
}

function getMiddle(s)
{
  if (s.length % 2 === 0){
    return s.charAt((s.length / 2) - 1) + s.charAt(s.length / 2)
  } else {
    return s.charAt(s.length / 2)
  }
}

function filter_list(l) {
    return l.filter(e => Number.isInteger(e))
  }