// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let twoHighest = []
    twoHighest.push(Math.max(...ages))
    if (ages.filter(a => a === twoHighest[0]).length > 1){
      twoHighest.push(Math.max(...ages))
    } else {
      twoHighest.push(Math.max(...ages.filter(a => a !== twoHighest[0])))
    } 
    return twoHighest.sort((a, b) => a-b)
  }