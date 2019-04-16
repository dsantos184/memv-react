import React from 'react'

import Botao from '../Botao'

import './style.css'


const Carousel = (props) =>(
    <div className="container">
        <a className="arrowCarousel arrowLeft" href="#">
            <i className="fas fa-chevron-left"></i>
        </a>
        <div className="containerCarousel"> 
            <ul className="carousel">
                <li className="itemCarousel sair">
                    <ul className="sublistCarousel">
                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/Colegio_Bahiense_logo.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                            <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>

                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/melo moreira.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                             <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>

                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/ibmr-nova-logo.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                             <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>

                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/feuc---educacao-continuada.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                             <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>

                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/CC pedro II.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                             <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>
                    </ul>
                </li>

                <li className="itemCarousel">
                    <ul className="sublistCarousel">
                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/Colegio_Bahiense_logo.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até oioioioioio <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                             <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>

                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/melo moreira.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                             <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>

                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/ibmr-nova-logo.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                             <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>

                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/feuc---educacao-continuada.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                             <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>

                        <li className="itemSublistCarousel">
                            <img src="https://www.minhaescolaminhavida.com.br/images/logos-escolas/CC pedro II.jpg" className="logoEscola" alt="Instituição em destaque"/>
                            <span>Bolsas com até <span className="destaque">50%</span></span>
                            <span>A partir de <span className="destaque">R$500,00/Mês</span></span>
                             <Botao btnText="Vagas Disponiveis" urlTo="/" classBtn="btnAzul" />
                        </li>
                    </ul>
                </li>


            </ul>
        </div>

        <a className="arrowCarousel arrowRight" href="#">
            <i className="fas fa-chevron-right"></i>
        </a>
    </div>
    
)

export default Carousel