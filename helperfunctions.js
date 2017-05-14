'use strict'
// guess argument should be already a string

export const isValidGuess = (guess) => {
  var isValid = true
  var responseInvalidGuess
  if (guess.length !== 4) {
    responseInvalidGuess = 'The guess should be 4 digits. Try again!'
    isValid = false
  } else if (guess[0] === '0') {
    responseInvalidGuess='Invalid Guess! The guess can not start with 0. Try again!'
    isValid = false
  } else {
    for (let i = 0; i < guess.length - 1; i++) {
      for (let j = i+1; j < guess.length; j++) {
        if (guess[i] === guess[j]) {
          responseInvalidGuess='Invalid Guess! The guess has to contain unique integers. Try again!'
          isValid = false
        }
      }
    }
  }
  return [isValid, responseInvalidGuess]
}

// guess argument should be already a string
export const response = (guess, target) => {
  var responseMessage
  if (guess === target) {
    return responseMessage='YOU WON!'
  }
  var rightPlace = 0
  var wrongPlace = 0
  for (let i = 0; i < guess.length; i++) {
    if (target.indexOf(guess[i]) > -1) {
      if (target[i] === guess[i]) {
        rightPlace++
      } else {
        wrongPlace++
      }
    }
  }
  return responseMessage ='+' + rightPlace + '  ' + '-' + wrongPlace
}
