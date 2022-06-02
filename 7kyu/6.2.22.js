var number=function(array){
    if(array.length === 0){ return array}
    
    let newArr = []
    for (let i = 0; i < array.length; i++){
      newArr.push(`${i+1}: ${array[i]}`)
    }
    return newArr
  }