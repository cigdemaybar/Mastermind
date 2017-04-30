// 'use strict'

// const db = require('APP/db')
//     , {Game, Guess, User, Thing, Favorite, Promise} = db
//     , {mapValues} = require('lodash')

// function seedEverything() {
//   const seeded = {
//     users: users(),
//     things: things(),
//   }
//   seeded.favorites = favorites(seeded)
//   seeded.games = games(seeded)
//   seeded.guesses = guesses(seeded)

//   return Promise.props(seeded)
// }

// const users = seed(User, {
//   god: {
//     email: 'god@example.com',
//     name: 'So many names',
//     password: '1234',
//   },
//   barack: {
//     name: 'Barack Obama',
//     email: 'barack@example.gov',
//     password: '1234'
//   },
// })

// const things = seed(Thing, {
//   surfing: {name: 'surfing'},
//   smiting: {name: 'smiting'},
//   puppies: {name: 'puppies'},
// })

// const favorites = seed(Favorite,
//   // We're specifying a function here, rather than just a rows object.
//   // Using a function lets us receive the previously-seeded rows (the seed
//   // function does this wiring for us).
//   //
//   // This lets us reference previously-created rows in order to create the join
//   // rows. We can reference them by the names we used above (which is why we used
//   // Objects above, rather than just arrays).
//   ({users, things}) => ({
//     // The easiest way to seed associations seems to be to just create rows
//     // in the join table.
//     'obama loves surfing': {
//       user_id: users.barack.id,    // users.barack is an instance of the User model
//                                    // that we created in the user seed above.
//                                    // The seed function wires the promises so that it'll
//                                    // have been created already.
//       thing_id: things.surfing.id  // Same thing for things.
//     },
//     'god is into smiting': {
//       user_id: users.god.id,
//       thing_id: things.smiting.id
//     },
//     'obama loves puppies': {
//       user_id: users.barack.id,
//       thing_id: things.puppies.id
//     },
//     'god loves puppies': {
//       user_id: users.god.id,
//       thing_id: things.puppies.id
//     },
//   })
// )

// const games = seed(Game, {
//   game1: {
//     secret: '1234'
//   }
// })

// const guesses = seed(Guess, {
//   guess1: {
//     value: '1567',
//     response: '+1',
//     game_id: 1
//   }
// })

// if (module === require.main) {
//   db.didSync
//     .then(() => db.sync({ force: true }))
//     .then(seedEverything)
//     .finally(() => process.exit(0))
// }

// class BadRow extends Error {
//   constructor(key, row, error) {
//     super(error)
//     this.cause = error
//     this.row = row
//     this.key = key
//   }

//   toString() {
//     return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
//   }
// }

// function seed(Model, rows) {
//   return (others = {}) => {
//     if (typeof rows === 'function') {
//       rows = Promise.props(
//         mapValues(others,
//           other =>
//             // Is other a function? If so, call it. Otherwise, leave it alone.
//             typeof other === 'function' ? other() : other)
//       ).then(rows)
//     }

//     return Promise.resolve(rows)
//       .then(rows => Promise.props(
//         Object.keys(rows)
//           .map(key => {
//             const row = rows[key]
//             return {
//               key,
//               value: Promise.props(row)
//                 .then(row => Model.create(row)
//                   .catch(error => { throw new BadRow(key, row, error) })
//                 )
//             }
//           }).reduce(
//           (all, one) => Object.assign({}, all, { [one.key]: one.value }),
//           {}
//           )
//       )
//       )
//       .then(seeded => {
//         console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
//         return seeded
//       }).catch(error => {
//         console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
//       })
//   }
// }

// module.exports = Object.assign(seed, { games, guesses, users, things, favorites })
