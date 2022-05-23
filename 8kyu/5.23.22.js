function toFreud(string) {
    if (string === ""){return string}
    let numOfWords = string.split(' ').length
    let freud = 'sex '
    return freud.repeat(numOfWords).trim()
}

function defineSuit(card) {
    switch (card[card.length -1]) {
      case '♣':
      return 'clubs'
      case '♦': 
      return 'diamonds'
      case '♥': 
      return 'hearts'
      case '♠':
      return 'spades'
      }
}

function plural(n) {
    return (n !== 1)
}