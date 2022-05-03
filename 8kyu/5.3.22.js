function findLongest(str) {
    var spl = str.split(" "),
        longest = 0;
    
    for (var i in spl) {
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
    }
  
    return longest;
  }

function greet(language) {
    lan = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    if (language in lan){
        return lan[language]
    } else {
        return lan.english
    }
}
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }

  function generateRange(min, max, step){
    let arr = []
    for (let i = min; i <= max; i = i + step){
      arr.push(i)
    }
    return arr
  }