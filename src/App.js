import React, { Component, Fragment } from 'react';
import './css/generic/reset.css'
import './css/base/base.css'
import './App.css';
import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import LinkBarraSuperior from './components/LinkBarraSuperior'
import ComoFunciona from './pages/ComoFunciona'
import ZapBarraSuperior from './components/ZapBarraSuperior'
import MenuRegulamentos from './components/MenuRegulamentos'

import Logo from './img/logo-cabecalho.png'


class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="barraSuperior">
            <Router>

              <LinkBarraSuperior to="/0800 038 6068" iconClass="fa-phone" texto="0800 038 6068"/>

              <LinkBarraSuperior to="/como-function" iconClass="fa-info-circle" texto="Como Funciona"/>

              <img src={Logo} className="logoCabecalho"/>

              <MenuRegulamentos/>

              <ZapBarraSuperior/>

              <Route path="/como-funciona" component={ComoFunciona}/>

            </Router>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default App;
