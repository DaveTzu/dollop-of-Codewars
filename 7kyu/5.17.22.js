function dontGiveMeFive(start, end) {
    let arr = []
    for (let i = start; i <= end; i++ ){
      if (!(String(i).split('').includes('5'))){
        arr.push(i)
      }
    }
    return arr.length;
  }

function chain(input, fs) {
    let x = input
fs.forEach(f=>{
    x=f(x)
})
    return x
}

function mygcd(x,y){
for (let i = Math.max(x, y); i > 0; i--) {
    if (x % i === 0 && y % i === 0){
    return i
    }
}
}


