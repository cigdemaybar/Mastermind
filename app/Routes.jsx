'use strict'
// downloads
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import axios from 'axios'

// components
import store from './store'
import App from './components/App'
import Games from './components/Games'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Rules from './components/Rules'

// dispatchers
import { createGame } from './reducers/game'

const Routes = ({ onGamesEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Games} />
      <Route path="/games" component={Games} onEnter={onGamesEnter}/>
      <Route path="/rules" component={Rules} />
      <Route path="/login" component={Login} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
)

/* ------------- CONTAINER ---------------- */

const mapStateToProps = null
const mapDispatch = dispatch => ({
  onGamesEnter: () => {
    dispatch(createGame())
  }
})

export default connect(mapStateToProps, mapDispatch)(Routes)
