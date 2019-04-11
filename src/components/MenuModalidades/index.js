import React from 'react'

import './style.css'

const MenuModalidades = (props) =>(
    <ul className="menuModalidades">
        <li className="itemModalidade">
            <img src={require('../../img/icon-graduacao.png')} />
            <span>Graduação / Pós-Graduação</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-ensino-basico.png')} />
            <span>Ensino Basico</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-curso-tecnico.png')} />
            <span>Cursos Técnico</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-profissionalizante.png')} />
            <span>Profissionalizante</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-eja.png')} />
            <span>EJA</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-idiomas.png')} />
            <span>Idiomas</span>
        </li>

        <li className="itemModalidade">
            <img src={require('../../img/icon-prevestibular.png')} />
            <span>Pré-vestibular / Preparatório</span>
        </li>
    </ul>
)

export default MenuModalidades