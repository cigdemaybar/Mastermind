'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { inputGuess } from '../reducers/guess'
import { isValidGuess, response } from '../../helperfunctions'

/* ------------- COMPONENT --------------- */

class Games extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      guesses: [{value: 'cengiz', response: 'lala'}, {value: 'erman', response: 'saltbae'}],
      input: '',
      value: '',
      response: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit(e) {
    e ? e.preventDefault() : null
    var isValid = isValidGuess(this.state.input)
    if (isValid[0]) {
      var responseMessage =response(this.state.input, this.props.game.secret)
      var guesses = this.state.guesses
      guesses.push({
        value: this.state.input,
        response: responseMessage
      })
      this.setState({
        value: this.state.input,
        response: responseMessage,
        guesses: guesses
      })
      browserHistory.push('/games')
    } else {
      this.setState({ input: '' })
      window.alert(isValid[1])
    }
  }
  render() {
    console.log('games state', this.state)
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
