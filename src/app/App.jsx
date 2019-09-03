
import logo from './logo.svg';
import './App.css';
import React, { Component,Fragment } from 'react'
import LoginForm from '../feature/login-form/LoginForm';
import MovieList from '../feature/home/MoiveList';

class App extends Component {
  render() {
    return (
      <Fragment>
          <MovieList />
      </Fragment>
    )
  }
}
export default App;


