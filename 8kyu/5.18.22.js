function oddCount(n){
    return Math.floor(n / 2)
  }

function index(array, n){
return array.length > n ? Math.pow(array[n], n) : -1
} 

function weatherInfo (temp) {
    var c = convertToCelsius(temp)
    if (c <= 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius
  }

  