import axios from 'axios'
import { response } from '../../helperfunctions'

/* ------------- ACTIONS ---------------- */

const ENTER_GUESS = 'ENTER_GUESS'

/* ------------- ACTION CREATER ---------------- */

export const enterGuess = (value, secret) => ({ type: ENTER_GUESS, value: value, response: response(value, secret) })

/* ------------- REDUCERS ---------------- */

export default function reducer(guesses = [], action) {
  switch (action.type) {
  case ENTER_GUESS:
    return [...guesses, { value: action.value, response: action.response }]
  default:
    return guesses
  }
}

/* ------------- DISPATCHERS ---------------- */

export const inputGuess = (value, secret) => dispatch => {
  axios.post('/api/games', value, secret)
  .then(res => {
    console.log('res.data?', res.data)
    dispatch(enterGuess(res.data))
  })
  .catch(err => console.error('Error fetching games', err))
}
