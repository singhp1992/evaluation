import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LogInPage from './components/login/logInPage'
import SignUpPage from './components/signup/signUpPage'
import LogOutPage from './components/logout/logOutPage'
import TopBar from './components/layout/topBar'
import HomePage from './components/homepage/HomePage'
import BatchPage from './components/batchpage/BatchPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{ marginTop: 75 }}>
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/logout" component={LogOutPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/batches" component={HomePage} />
            <Route exact path="/batches/:id" component={BatchPage} />
            {/* <Route exact path="/batches/:id/:name" component={StudentView} /> */}
            <Route exact path="/" render={() => <Redirect to="/login" />} />

          </main>
        </div>
      </Router>
    )
  }
}
export default App