'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('games', {
  secret: STRING,
})
