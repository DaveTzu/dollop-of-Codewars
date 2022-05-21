function addBinary(a,b) {
    return (a + b).toString(2)
  }

  var number = function(busStops){
    return Math.abs(busStops.reduce((a, stop) => a = a + stop[1] - stop[0], 0))
  }

  function oddOrEven(array) {
    let num = array.reduce((a, x) => x = x + a, 0)
    return num % 2 === 0 ? 'even' : 'odd'
 }
