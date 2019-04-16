import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

const Botao = (props) =>(
    <Link className={`btn ${props.classBtn}`} to={props.urlTo} >{props.btnText}</Link>
)

export default Botao