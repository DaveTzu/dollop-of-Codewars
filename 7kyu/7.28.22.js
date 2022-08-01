function validatePIN (pin) {
    let valid = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let arr = pin.split('')
    for (let i = 0; i < arr.length; i++){
      if(!(valid.includes(arr[i]))){
        console.log(arr[i])
        return false
      }
    }
    return (arr.length === 4 || arr.length === 6)
  }