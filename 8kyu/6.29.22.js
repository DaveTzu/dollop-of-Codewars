

function shortcut (string) {
    let s = string.split('').filter(c => c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u' )
    return s.join('')
  }
