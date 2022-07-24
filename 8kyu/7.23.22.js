
  function  calculateAge(birthYear, checkYear) {
    if (birthYear === checkYear){
      return `You were born this very year!`
    } else if (birthYear < checkYear) {
      return checkYear - birthYear === 1 ? 
          `You are 1 year old.` :
          `You are ${checkYear - birthYear} years old.`
    } else {
      return birthYear  - checkYear === 1 ? 
          `You will be born in 1 year.` :
          `You will be born in ${birthYear - checkYear} years.`
    }
  }
