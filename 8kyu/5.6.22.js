function arrayMadness(a, b) {
    sums = a.reduce(((acc, x) => acc + (x * x)), 0)
    cubes = b.reduce(((acc, y) => acc + (y * y * y)),0)
    return sums > cubes ? true : false
}

function warnTheSheep(queue) {
    wolfAt = queue.indexOf('wolf')
      if (wolfAt === queue.length - 1) {
        return 'Pls go away and stop eating my sheep'
      } else
        {
          return `Oi! Sheep number ${(queue.length - wolfAt - 1)}! You are about to be eaten by a wolf!`
        }
}

function addLength(str) {
    return str.split(' ').map(s => { return s = s + ' ' + s.length })
}

var findAverage = function (nums) {
    return nums.reduce((acc, n) => acc = acc + n, 0) / nums.length
  } 

