function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
  }

  function findNeedle(haystack) {
    let search = haystack.indexOf('needle')
    if(search !== -1) {
      return 'found the needle at position ' + search
    } else {
      return "Your function didn't return anything"
      }
    }

    function removeExclamationMarks(s) {
        return s.replace(/!/g, '')
      }

      function getGrade (s1, s2, s3) {
        let avg = (s1 + s2 +s3) / 3
        if (avg < 60) {
          return 'F'
        } else if (avg < 70) {
          return 'D'
        } else if (avg < 80) {
          return 'C'
        } else if (avg < 90) {
          return 'B'
        } else {
          return 'A'
        }
      }     