function direction(facing, turn){
    let arr = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    let steps = turn / 45
    let currentSpot = arr.indexOf(facing)
    console.log(currentSpot)
    console.log(steps)
    
    // if move forward end before roll over
    if (steps >= 0 && steps + currentSpot < 8)
      {
        return arr[currentSpot + steps]
      }
    // if negative move end before roll over
    if (steps < 0 && steps + currentSpot >= 0) {
      return arr[currentSpot + steps]
      
    }
    
    // if move forward with roll over
    
    if((currentSpot + steps) >= 8 && steps > 0){
      
      //return arr[8 - (steps + currentSpot)]
      return arr[(currentSpot + steps) % 8]
    }
    // if negative move with roll over
    if((currentSpot + steps) < 0 && steps < 0){
      if ((((currentSpot + steps) % 8) + 8) === 8) {
        return arr[0]
      } else {
      return arr[((currentSpot + steps) % 8) + 8] 
      }
      }
  }

  