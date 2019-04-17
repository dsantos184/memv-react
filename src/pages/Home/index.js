import React, {Fragment} from 'react'
import Titulo from '../../components/Titulo'
import Carousel from '../../components/Carousel'
import Botao from '../../components/Botao'
import Rodape from '../../components/Rodape'

import './style.css'

const Home = (props) =>(
    <Fragment>
        
        <section className="containerBox">
            <Titulo tituloText="Alguns de Nossos Parceiros"/>
            <span className="subTitulo">Mais de 1.200 instituições cadastradas</span>
        </section>
        
        <img className="bannerParceiros" src={require('../../img/banner-parceiros.gif')} alt="Mais de 1.200 instituições Parceiras" />

        <section className="containerBox">
            <Titulo tituloText="Instituições em Destaque"/>
            <Carousel />
        </section>

        <section className="containerCartaRenovacao">
            
            <div className="containerRenovacao">
                <p className="textRenovacao">
                    Para você que já é nosso aluno do Ens.
                    Básico, gere o boleto e renove o seu benefício.
                </p>
                <Botao  urlTo="/boleto-renovacao" classBtn="btnAzul"  btnText="Quero Renovar Minha Bolsa" />
            </div>

            <div className="containerCarta">
                <p className="textCarta">
                    Clique no botão abaixo para buscar e fazer                    
                    o download da sua carta de aprensentação.
                </p>
                <Botao  urlTo="/buscar-carta-renovacao" classBtn="btnLaranja"  btnText="Gerar Carta de Aprensentação" />
            </div>

        </section>

        <Rodape />

    </Fragment>
)

export default Home