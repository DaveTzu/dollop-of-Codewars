function declareWinner(fighter1, fighter2, firstAttacker) {
    let f1, f2, turn = 1
    if (firstAttacker === fighter1.name){
      f1 = fighter1, f2 = fighter2
    } else {
      f1 = fighter2, f2 = fighter1
    }
    while(f1.health > 0 && f2.health > 0){
      if(turn % 2 == 1){
        f2.health = f2.health - f1.damagePerAttack
      } else if (turn % 2 == 0){
        f1.health = f1.health - f2.damagePerAttack
      }
      turn++
    }
    if (f1.health <= 0) return f2.name
    else if (f2.health <= 0) return f1.name
  }