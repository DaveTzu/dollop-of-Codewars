function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => {
      let exclude = false
      geese.forEach( g => {
        if (b === g){
          exclude = true
        }
      })
      return exclude ? false : true
    })
  };
