import React, { Component } from 'react'

import{
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
  
import './style.css'

import LinkBarraSuperior from '../LinkBarraSuperior'
import ComoFunciona from '../../pages/ComoFunciona'
import ZapBarraSuperior from '../ZapBarraSuperior'
import MenuRegulamentos from '../MenuRegulamentos'
import MenuModalidades from '../MenuModalidades'

export default class Header extends Component
{
    render()
    {
        return(
            <header>
                {/*BARRA SUPERIOR */}
                <section className="barraSuperior">
                    <Router>

                    <LinkBarraSuperior to="/0800 038 6068" iconClass="fa-phone" texto="0800 038 6068"/>

                    <LinkBarraSuperior to="/como-function" iconClass="fa-info-circle" texto="Como Funciona"/>

                    <img src={require('../../img/logo-cabecalho.png')} className="logoCabecalho"/>

                    <MenuRegulamentos/>

                    <ZapBarraSuperior/>

                    <Route exact path="/como-funciona" component={ComoFunciona}/>

                    </Router>
                </section>
                {/*FIM BARRA SUPERIOR */}

                {/*CONTAINER COM O MENU DE MODALIDADES */}
                <section className="containerMenuModalidades">
                    <MenuModalidades />
                </section>
                {/*FIM CONTAINER COM O MENU DE MODALIDADES */}

            </header>
        )
    }
}