'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { Router, Link, browserHistory } from 'react-router'
import { inputGuess } from '../reducers/guess'
import { isValidGuess, response } from '../../helperfunctions'

/* ------------- COMPONENT --------------- */

class Games extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      guesses: [{value: '', response: ''}],
      input: '',
      currentIndex: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    var guesses = this.state.guesses
    guesses[this.state.currentIndex].value = e.target.value
    this.setState({
      input: e.target.value,
      guesses: guesses
    }
    )
  }

  handleSubmit(e) {
    e ? e.preventDefault() : null
    var isValid = isValidGuess(this.state.input)
    var guesses
    if (isValid[0]) {
      var responseMessage =response(this.state.input, this.props.game.secret)
      guesses = this.state.guesses
      guesses[this.state.currentIndex].response = responseMessage
      if (responseMessage === 'YOU WON!') {
        var numAttempts = this.state.currentIndex + 1
        window.location.reload()
        window.alert(`CONGRATULATIONS!!! YOU FOUND IT IN ${numAttempts} ATTEMPTS`)
      } else {
        guesses.push({
          value: '',
          response: ''
        })
      }
      this.setState({
        guesses: guesses,
        input: '',
        currentIndex: this.state.currentIndex+1
      })
    } else {
      guesses = this.state.guesses
      guesses[this.state.currentIndex].value = ''
      this.setState({ input: '', guesses: guesses })
      window.alert(isValid[1])
    }
  }
  render() {
    console.log('games props', this.props)
    const guesses = this.state.guesses
    return (
  <div>
    <h1>Let's Play the Mastermind</h1>
    <div>
      <table className="table" className="col-md-6">
        <thead>
          <tr>
            <th>Guess #</th>
            <th>Guess</th>
            <th>Result</th>
          </tr>
      </thead>
      <tbody>
        {guesses.map((guess, index) =>
        <tr key={index}>
          <td> {index+1} </td>
          <td>{guess.value}</td>
          <td>{guess.response}</td>
        </tr>
        )}
      </tbody>
      </table>
    </div>
    <div>
      <form onSubmit={this.handleSubmit} className="col-md-2">
        <label>
          Guess:
          <input type="text"
                 value={this.state.input}
                 onChange={this.handleChange} />
        </label>
        <button
              className="btn btn-success btn-sm"
              onSubmit={this.handleSubmit}
              type='submit'>Submit
        </button>
      </form>
    </div>
  </div>
    )
  }
}

/* ------------- CONTAINER --------------- */

const mapStateToProps = (state) => (state)

const mapDispatchToProps = null

// (dispatch) => {
//   return {
//     inputGuess(value, secret) {
//       dispatch(inputGuess(value, secret))
//     }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Games)
