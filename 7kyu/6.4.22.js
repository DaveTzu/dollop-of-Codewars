
const sequenceSum = (begin, end, step) => {
    let arr = []
    for (let i = begin; i <= end; i = i + step){
      arr.push(i)
    }
    console.log(arr)
    return arr.reduce((acc, n) => acc = acc + n, 0)
  };