/solutions/javascript/me/best_practice

multiply = function (a, b) {
    return a * b;
}

function positiveSum(arr) {
    return arr.reduce((a, item) => a + (item > 0 ? item : 0), 0)
}

function makeNegative(num) {
    if (num < 0){
    return num;
    }
    else if(num > 0)
    {
    return num * -1;
    }
    else return 0;
}

function opposite(number) {
    return number * (-1);
}

function removeChar(str){
    arr = [...str]
    arr.shift()
    arr.pop()
    return arr.join('')
}

function solution(str){
    arr=[...str]
    return arr.reverse().join('')
}

function boolToWord( bool ){
    if(bool === true){
      return "Yes"
    }else{
      return "No"
    }
}

function numberToString(num) {
    return num.toString();
}

function repeatStr (n, s) {
    return s.repeat(n);
}

var summation = function (num) {
    let sum = 0
    for (let i = 0; i < num + 1; i++){
      sum = sum + i
    }
    return sum
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}

function noSpace(x){return x.split(' ').join('')}

function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
      sum = sum + numbers[i] * numbers[i];
    }
    return sum;
}

function countSheeps(arrayOfSheep) {
    let result = 0
    arrayOfSheep.forEach(sheep => sheep ? result++ : null)
    return result
} 

function isDivisible(n, x, y) {
    if(n%x===0 && n%y===0) return true;
    else return false
}

function century(year) {
    if (year % 100 > 0) {
      return Math.floor(year / 100 + 1, 0)
    } else {
      return Math.floor(year / 100, 0)
    }
}

function basicOp(operation, value1, value2)
{
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

const quarterOf = (month) => {
    if (month === 1 || month === 2 || month === 3) {
    return 1 } else if (month === 4 || month === 5 || month === 6) {
    return 2 } else if (month === 7 || month === 8 || month === 9){
    return 3 } else {
    return 4}
}

function points(games) {
    return games.reduce((a, game) => {
                        if (game[0] > game[2]) { return a + 3}
                        else if (game[0] < game[2]) {return a + 0}
                        else { return a + 1}
                        }, 0)  
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2)
}

var countSheep = function (num){
    let str =''
    let count = 0
    while (count < num) {
      str = str + (count + 1)  + " sheep..."
      count++
    }
    return str
}

const areaOrPerimeter = function(l , w) {
    return (l === w) ? l * w : 2 * l + 2 * w;
    
};

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

function century(year) {
    if (year % 100 > 0) {
      return Math.floor(year / 100 + 1, 0)
    } else {
      return Math.floor(year / 100, 0)
    }
}

function arrayPlusArray(arr1, arr2) {
    return (arr1.reduce((a,e) => a + e, 0)) + (arr2.reduce((b,f) => b + f, 0))
}

function isDivideBy(number, a, b) {
    return number % a === 0 && number  % b === 0 ? true : false;
}

function otherAngle(a, b) {
    return 180 - a - b;
}

const reverseSeq = n => {
    let count = n
    let arr = []
    while (count > 0) {
      arr.push(count)
      count = count - 1
      }
    return arr
};

function toBinary(n){
    return Number(n.toString(2))
}

function sumStr(a,b) {
    return String(Number(a)+Number(b));
}