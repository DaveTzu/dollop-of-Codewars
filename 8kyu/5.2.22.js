function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600)
  }

  function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) {
      return 100
    } else if (exam > 75 && projects >= 5) {
      return 90
    } else if (exam > 50 && projects >= 2) {
      return 75
    } else {
      return 0
    }
  }

  function setAlarm(employed, vacation){
    return vacation ? false : employed ? true : false;
  }

  function doubleChar(str) {
    return str.split('').map(c => {return `${c}${c}`}).join('')
  }
   
