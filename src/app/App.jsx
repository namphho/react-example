
import logo from './logo.svg';
import './App.css';
import React, { Component,Fragment } from 'react'
import LoginForm from '../feature/login-form/LoginForm';


class App extends Component {
  render() {
    return (
      <Fragment>
          <LoginForm />
      </Fragment>
    )
  }
}
export default App;


