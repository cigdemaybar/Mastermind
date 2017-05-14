import React from 'react'
import {connect} from 'react-redux'
import Games from './Games'

const App = ({ children, user }) => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Mastermind</a>
                    <ul className="nav navbar-nav navbar-left">
                        <li><a href="/games">Games</a></li>
                        <li><a href="/rules">Game Rules</a></li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/github">GitHub</a></li>
                        { user ? <li><a href="/myaccount">My Account</a></li> : <li><a href="/login">Log In / Sign Up</a></li>}
                    </ul>
                </div>
            </div>
        </nav>
        <div>
            <div id='home'>
                {children}
            </div>
        </div>
    </div>
  )

export default connect(
  ({ auth }) => ({ user: auth })
)(App)
