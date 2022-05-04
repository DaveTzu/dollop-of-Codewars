function sayHello(name) {
    return 'Hello, '+name
}

  var a = "code";
  var b = "wa.rs";
  var name = a + b;


function tripleTrouble(one, two, three){
    let str = ''
    for (let i = 0; i<one.length; i++) {
      str = str + one[i] + two[i] + three[i]
    }
    return str
}

function square(n){
  return n*n
}

function unusualFive() {
    let n = 'fivee'
    return n.length
  }

  function hello(name) {
    if (!name){
      return 'Hello, World!'
    } else {
      arr = [...name]
      arr[0] = arr[0].toUpperCase()
      for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase()
      }
      let response = arr.join('') 
      return `Hello, ${response}!`
    }
  }

  function helloWorld() {
    var str = 'Hello World!'
    console.log(str)
  }