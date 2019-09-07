const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase()
  let charArray = sentence.split('')
  let validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let lettersArray = [] // collect letters without special characters
  charArray.forEach(char => {
    if(validLetters.indexOf(char) > -1) lettersArray.push(char)
  })
  // Join: JOINS elements of an ARRAY INTO STRING
  // takes separator ''

  // check if reversed string is equal to non reversed string
  if (lettersArray.join('') === lettersArray.reverse().join('')) return true
  else return false

}

let is = isPalindrome("Madam I'm Adam")
let isIt = isPalindrome("race car")
console.log(is)
console.log(isIt)
