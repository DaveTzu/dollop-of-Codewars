function longest(s1, s2) {
    let str = s1 + s2
    let strArr = str.split('')
    let newArr = []
    strArr.forEach(c => {
      if (!newArr.includes(c)) {
        newArr.push(c)
      }
    })
    return newArr.sort().join('')
}

function friend(friends){
return friends.filter(name => name.length === 4)
}

function openOrSenior(data){
    let newArr = data.map(d => {
      if (d[0] > 54 && d[1] > 7) {
        return 'Senior'
      } else {
        return 'Open'
      }
    })
    return newArr
}