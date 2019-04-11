import React from 'react'

import './style.css'

const ZapBarraSuperior = (props) => (
    <div className="containerZap">
        <a href="https://api.whatsapp.com/send?phone=5521970053045">
            <i className="fab fa-whatsapp iconZap"></i>
            <span className="textZap">Entre em contato</span>
            <span className="telZap">(21)97005-3045</span>
        </a>
    </div>
)

export default ZapBarraSuperior