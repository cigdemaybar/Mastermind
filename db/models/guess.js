'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('guesses', {
  value: STRING,
  response: STRING
})

module.exports.associations = (Guess, {Game}) => {
  Guess.belongsTo(Game)
}
