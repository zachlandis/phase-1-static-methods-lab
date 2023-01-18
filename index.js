class Formatter {
  //add static methods here
  static capitalize(string) {
    const firstLetter = string.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = string.substring(1)
    return firstLetterCap + remainingLetters 
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }


  static titleize(string) {
    const arr = string.split(' ');
    arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
      console.log(arr)
    for (let i = 1; i < arr.length; i++) {    
      if (arr[i] !== 'of' && arr[i] !== 'an' && arr[i] !== 'a' && arr[i] !== 'but' && arr[i] !== 'of' && arr[i] !== 'and' && arr[i] !== 'for' && arr[i] !== 'from' && arr[i] !== 'the' && arr[i] !== 'at' && arr[i] !== 'by')  {
        console.log(arr[i])
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    }

    const string2 = arr.join(' ')
    console.log(string2)
    return string2

    
    }
  }
  



