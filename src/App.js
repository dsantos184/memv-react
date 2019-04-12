import React, { Component, Fragment } from 'react';
import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import './css/generic/reset.css'
import './css/base/base.css'
import './App.css';

import Header from './components/Header'

import ComoFunciona from './pages/ComoFunciona'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
        
          <Route exact path="/como-funciona" component={ComoFunciona} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
