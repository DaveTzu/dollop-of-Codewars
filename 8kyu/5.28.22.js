String.prototype.toAlternatingCase = function () {
    let arr = this.split('')
    let newArr = arr.map((c, i) => {
              console.log(c.toLowerCase() + ' ' + this.charAt(i)) 
              if(c.toLowerCase() === this.charAt(i)){
                 return c.toUpperCase()
               } else {
                 return c.toLowerCase()
               }
                })
    return newArr.join('')
    
  }
