import React from 'react'

import './style.css'

import LinkBarraSuperior from '../LinkBarraSuperior'
import {Link} from 'react-router-dom'


const MenuRegulamentos = (props) => (
    <ul className="menuRegulamentos">
        <li>
            <LinkBarraSuperior to="/" iconClass="fa-bars" texto="Regulamento"/>
        </li>
        <li>
            <ul className="subMenuRegulamentos">
                <li className="menuItem">
                    <Link className="actionSubmenu" to="/regulamento-ensino-basico">Ensino Básico</Link>
                </li>
                <li className="menuItem">
                    <Link className="actionSubmenu" to="/regulamento-curso-tecnico">Curso Técnico</Link>
                </li>
                <li className="menuItem">
                    <Link className="actionSubmenu" to="/regulamento-curso-profissionalizante">Curso Profissionalizante</Link>
                </li>
                <li className="menuItem">
                    <Link className="actionSubmenu" to="/regulamento-curso-eja">Curso EJA(supletivo)</Link>
                </li>
                <li className="menuItem">
                    <Link className="actionSubmenu" to="/regulamento-curso-idiomas">Idiomas</Link>
                </li>
                <li className="menuItem">
                    <Link className="actionSubmenu" to="/regulamento-graduacao">Graduação</Link>
                </li>
            </ul>
        </li>
    </ul>
    
)

export default MenuRegulamentos