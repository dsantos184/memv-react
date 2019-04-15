import React from 'react'

import './style.css'

const MenuModalidades = (props) =>(
    <ul className="menuModalidades">
        <li className="itemModalidade">
            <img src={require('../../img/icon-graduacao.png')}  alt="Graduação - Pós-graduação"/>
            <span>Graduação / Pós-Graduação</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-ensino-basico.png')} alt="Ensino Básico"/>
            <span>Ensino Basico</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-curso-tecnico.png')} alt="Cursos Técnico"/>
            <span>Cursos Técnico</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-profissionalizante.png')} alt="Cursos Profissionalizante"/>
            <span>Profissionalizante</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-eja.png')} alt="EJA"/>
            <span>EJA</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-idiomas.png')} alt="Cursos de Idiomas"/>
            <span>Idiomas</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-prevestibular.png')} alt="Cursos Pré-vestibular - Preparatório"/>
            <span>Pré-vestibular / Preparatório</span>
        </li>
    </ul>
)

export default MenuModalidades