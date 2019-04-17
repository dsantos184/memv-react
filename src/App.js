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
import Home from './pages/Home'

import Rodape from './components/Rodape'


class App extends Component {
  render() {
    return (
      <Fragment>

        <Router>
          
          <Header />

          <main className="containerPrincipal">
            
            <Route exact path="/" component={Home} />
            <Route exact path="/como-funciona" component={ComoFunciona} />

          </main>

          <Rodape />

        </Router>
      </Fragment>
    );
  }
}

export default App;
