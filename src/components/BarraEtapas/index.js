import React from 'react'
import './style.css'

const BarraEtapas = (props) =>(
    
    <section className="containerBarraPassos">
        <div className="sigaPassos">
            <span className="textSigaPassos">Siga os Passos</span>
        </div>
        
        <div className="containerPassos">
            <article className="passos">
                <span className="titlePassos">1. Escolha sua Bolsa</span>
                <span className="textPassos">Utilizando o menu acima.</span>
            </article>

            <i className="fas fa-arrow-right iconEtapas"></i>

            <article className="passos">
                <span className="titlePassos">2. Preencha seus dados</span>
                <span className="textPassos">Necessário para gerar carta.</span>
            </article>

            <i className="fas fa-arrow-right iconEtapas"></i>

            <article className="passos">
                <span className="titlePassos">3. Carta de apresentação</span>
                <span className="textPassos">Recebida ao final do processo.</span>
            </article>
        </div>

    </section>
)

export default BarraEtapas