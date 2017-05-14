import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  game: require('./game').default,
  guess: require('./guess').default
})

export default rootReducer
