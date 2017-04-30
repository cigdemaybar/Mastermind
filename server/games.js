const db = require('APP/db')
const Game = db.model('games')
const Guess = db.model('guesses')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Game.findOne()
      .then(games => {
        res.json(games)
      })
      .catch(next)
  })
  .post('/', (req, res, next) => {
    Guess.create(req.body, {include: [Game]})
      .then(guess => res.status(201).json(guess))
      .catch(next)
  })
