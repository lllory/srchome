import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './reset.scss'
import Root from './Root'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Route>  
        <Root />
        </Route>
      
    );
  }
}

export default App;
