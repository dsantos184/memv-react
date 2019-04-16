import React from 'react'

import './style.css'

const newDate = new Date

const Rodape = (props) =>(
    <footer className="containerRodape">
        
        <div className="containerContatos">
            
            <div className="containerTel contato">
                <h4 className="tituContatos">Fale Conosco:</h4>
                <span className="contatoText">0800 038 6068 / (21) 3986-5006</span>
                <span className="contatoText">De segunda a sexta 08:00 as 18:00 hrs</span>
            </div>

            <div className="containerEmail contato">
                <h4 className="tituContatos">Mande um E-mail:</h4>
                <span className="contatoText">contato@minhaescolaminhavida.com.br</span>
            </div>

        </div>
        
        <div className="containerLiks">
        
        </div>

        <div className="containerCorp">
            <span>© {newDate.getFullYear()} <span className="memv">Minha Escola Minha Vida</span>. Todos os direitos reservados</span>
        </div>

    </footer>
)

export default Rodape