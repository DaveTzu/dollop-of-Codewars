function racePodium(blocks) {
    let one, two, three
    one = Math.ceil(blocks / 3)+1
    two = one - 1
    three = blocks - one - two
    if (three == 0){
      three = 1
      two -= 1
    }
    return [two, one, three]
  }