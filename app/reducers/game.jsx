import axios from 'axios'

/* ------------- ACTIONS ---------------- */

const NEW_GAME = 'NEW_GAME'

/* ------------- ACTION CREATER ---------------- */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateSecret() {
  var result = []
  // select first digit
  var firstDigit = getRandomInt(1, 9)
  result.push(firstDigit)
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  numbers.splice(firstDigit, 1)
  // select rest of the digits
  while (result.length < 4) {
    var index = getRandomInt(0, 9-result.length)
    result.push(numbers[index])
    numbers.splice(index, 1)
  }
  return result.join('')
}

export const newGame = () => ({ type: NEW_GAME, secret: generateSecret() })

/* ------------- REDUCERS ---------------- */

export default function reducer(game = { secret: '' }, action) {
  const newGame = Object.assign({}, game)
  switch (action.type) {
  case NEW_GAME:
    newGame.secret = action.secret
    return newGame
  default:
    return game
  }
}

/* ------------- DISPATCHERS ---------------- */

export const createGame = () => dispatch => {
  axios.get('/api/games')
  .then(res => {
    dispatch(newGame(res.data))
  })
  .catch(err => console.error('Error creating game', err))
}
