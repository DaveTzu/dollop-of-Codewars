function stray(numbers) {
    if (numbers.indexOf(numbers[0]) == numbers.lastIndexOf(numbers[0])){
      return numbers[0]
    } else{
      for (let i = 1; i <= numbers.length; i++){
        if(numbers[0] != numbers[i]){
          return numbers[i]
        }
      }
    }
  }