function calculateYears(principal, interest, tax, desired) {
    let years = 0
    let total = principal
    while ( principal < desired ){
      principal = principal + (((principal * interest) - (principal * interest) * tax))
      years++
    }
  return years
}

function XO(str) {
    let x = 0
    let y = 0
    for (let i = 0; i < str.length; i++)
      {
        if (str[i] === 'x' || str[i] === 'X'){
          x++
        } else if (str[i] === 'o' || str[i] === 'O'){ 
          y++ }
      }
    if (x === y){
      return true
    } else {return false}
}

var isAnagram = function(test, original) {
    if (test.length !== original.length){
      return false
    }
    let s1 = test.toLowerCase().split('').sort().join('')
    let s2 = original.toLowerCase().split('').sort().join('')
    if (s1 === s2) {
      return true
    } else { 
      return false}
}

function solution(str, ending){
    let s1 = str.split('').reverse()
    let s2 = ending.split('').reverse()
    let result = true
    for (let i = 0; i < s2.length; i++) {
      if (s1[i] != s2[i]){
          result = false}
    }
    return result
}