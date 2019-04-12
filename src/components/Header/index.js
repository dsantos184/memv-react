import React, { Component, Fragment } from 'react'
  
import './style.css'

import LinkBarraSuperior from '../LinkBarraSuperior'
import ZapBarraSuperior from '../ZapBarraSuperior'
import MenuRegulamentos from '../MenuRegulamentos'
import MenuModalidades from '../MenuModalidades'
import BarraEtapas from '../BarraEtapas'

export default class Header extends Component
{
    render()
    {
        return(
            <Fragment>
                <header>
                    {/*BARRA SUPERIOR */}
                    <section className="barraSuperior">
                        

                        <LinkBarraSuperior to="/0800 038 6068" iconClass="fa-phone" texto="0800 038 6068"/>

                        <LinkBarraSuperior to="/como-funciona" iconClass="fa-info-circle" texto="Como Funciona"/>

                        <img src={require('../../img/logo-cabecalho.png')} className="logoCabecalho"/>

                        <MenuRegulamentos/>

                        <ZapBarraSuperior/>

                       
                    </section>
                    {/*FIM BARRA SUPERIOR */}

                    {/*CONTAINER COM O MENU DE MODALIDADES */}
                    <section className="containerMenuModalidades">
                        <MenuModalidades />
                    </section>
                    {/*FIM CONTAINER COM O MENU DE MODALIDADES */}

                </header>

                <BarraEtapas />
            </Fragment>
        )
    }
}