function well(x){
    let goods = x.filter(x => x =='good').length
    return goods < 1 ? 'Fail!' :
           goods < 3 ? 'Publish!' : 'I smell a series!'
  }