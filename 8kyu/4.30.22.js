function lovefunc(flower1, flower2){
    return (flower1 % 2) !== (flower2 % 2) ? true : false;
  }

function hero(bullets, dragons){
    return (bullets >= dragons * 2 ? true : false);
}

const rps = (p1, p2) => {
    if( p1 === 'rock') {
      if(p2 === 'rock'){
        return "Draw!"
      } else if(p2 === 'scissors'){
        return 'Player 1 won!'
      } else {
        return 'Player 2 won!'
      }
    } else if (p1 === 'paper'){
      if(p2 === 'paper') {
        return 'Draw!'
      } else if (p2 === 'rock'){
        return 'Player 1 won!'
      } else {
        return 'Player 2 won!'
      }
    } else {
      if(p2 === 'scissors') {
        return 'Draw!'
      } else if (p2 === 'paper') {
        return 'Player 1 won!'
      } else {
        return 'Player 2 won!'
      }
    }
    
  };