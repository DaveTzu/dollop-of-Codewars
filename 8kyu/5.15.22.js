function firstNonConsecutive (arr) {
    if (arr === [] || arr.length === 1){
      return null
    }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== arr[i-1]+1 && i !== 0){
      console.log(arr[i])
      return arr[i]
    }
  }
  return null
}

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

function solution(a, b){
    return a.length < b.length ? a + b + a : b + a + b
  }
  