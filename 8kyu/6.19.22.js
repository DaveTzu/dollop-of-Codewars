
function magNumber(info){
    switch (info[0]) {
        case 'PT92':
        return Math.ceil((3 * info[1]) / 17)
        case 'M4A1':
        return Math.ceil((3* info[1]) / 30)
        case 'M16A2':
        return Math.ceil((3* info[1]) / 30)
        case 'PSG1':
        return Math.ceil((3 * info[1]) / 5)
    }
  }