
function pipeFix(numbers){
    let nArr = []
    for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++){
      nArr.push(i)
    }
    return nArr
  }
