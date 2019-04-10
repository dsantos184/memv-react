import React from 'react';

import LinkBarraSuperior from '../LinkBarraSuperior'

const MenuRegulamentos = (props) => (
    <ul className="menuRegulamentos">
        <li>
            <LinkBarraSuperior to="/" iconClass="fa-bars" texto="Regulamento"/>
        </li>
        <li>
            <ul className="subMenuRegulamentos">
                
            </ul>
        </li>
    </ul>
    
)

export default MenuRegulamentos