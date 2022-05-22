function divisors(integer) {
    let arr = []
    for (let i = 2; i < (integer / 2) + 1; i++){
        if ( integer % i === 0) {
        arr.push(i)
        }
    }
    return arr.length === 0 ? `${integer} is prime` : arr
};

