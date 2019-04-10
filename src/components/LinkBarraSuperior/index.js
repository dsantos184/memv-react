import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'


const LinkBarraSuperior = (props) =>(
    <Link className="dadoBarraSuperior" to={props.to}><i className={`fa ${props.iconClass} icon`}></i> {props.texto}</Link>
)

export default LinkBarraSuperior
