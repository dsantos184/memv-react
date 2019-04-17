import React from 'react'
import { Link } from 'react-router-dom'

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
        
        <div className="containerLinks">

            <ul className="listRodape">
                <li className="itemRodape itemTitulo">
                    <h4 className="tituloRodape">site</h4>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/">Início</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/quem-somos">Quem Somos</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/duvidas-frequentes">Dúvidas Frequentes</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/contato">Contato</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/intencao-vaga">Vagas 2019</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/indique-insticuicao">Indique uma Instituição</Link>
                </li>
            </ul>

            <ul className="listRodape">
                <li className="itemRodape itemTitulo">
                    <h4 className="tituloRodape">Corporativo</h4>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/cadastro-parceria">Seja Nosso Parceiro</Link>
                </li>
                <li className="itemRodape">
                    <a className="linkRodape" href="https://minhaescolaminhavida.com.br/login-diretor.php">Área do Diretor</a>
                </li>
                <li className="itemRodape">
                    <a className="linkRodape" href="https://minhaescolaminhavida.com.br/login-representante.php">Área do Representante</a>
                </li>
                <li className="itemRodape">
                    <a className="linkRodape" href="https://minhaescolaminhavida.com.br/area-administrativa/login.php">Área Administrativa</a>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/empresa-parceira">Login Parceiro</Link>
                </li>
                <li className="itemRodape">
                    <a className="linkRodape" href="https://famad.org.br">Apoio à FAMAD</a>
                </li>
            </ul>

            <ul className="listRodape">
                <li className="itemRodape itemTitulo">
                    <h4 className="tituloRodape">Regulamento</h4>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/regulamento-ensino-basico">Ensino Básico</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/regulamento-curso-tecnico">Curso Técnico</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/regulamento-curso-profissionalizante">Profissionalizante</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/regulamento-eja">EJA(supletivo)</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/regulamento-curso-idiomas">Idiomas</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/regulamento-graduacao">Graduação</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/regulamento-cancelamento">Cancelamento</Link>
                </li>
                <li className="itemRodape">
                    <Link className="linkRodape" to="/indique-insticuicao">VEstibular Estácio</Link>
                </li>
            </ul>

            <ul className="listRodape endereco">
                <li className="itemRodape itemTitulo">
                    <h4 className="tituloRodape">Onde Estamos</h4>
                </li>
                <li className="itemRodape">
                    
                    <address className="enderecoRodape">
                        Estrada dos Bandeirantes , 15076, L.113
                        Vargem Pequena - Rio de Janeiro - RJ
                        CNPJ: 19.534747/0001-58
                    </address>
            
                </li>
                <li className="itemRodape redesSocias">
                    
                    <h4 className="tituloRedesSociais">Siga-nos:</h4>

                    <a className="linkRodape linkRedesSociais" href="https://www.facebook.com/pages/Minha-Escola-Minha-Vida/603554409694570">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a className="linkRodape linkRedesSociais" href="https://www.instagram.com/curtaminhaescolaminhavida">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a className="linkRodape linkRedesSociais" href="https://www.youtube.com/channel/UCyzeqar4K1EuqXmAdaAvJlg">
                        <i class="fab fa-youtube"></i>
                    </a>
                    
                </li>
            </ul>


        </div>

        <div className="containerCorp">
            <span>© {newDate.getFullYear()} <span className="memv">Minha Escola Minha Vida</span>. Todos os direitos reservados</span>
        </div>

    </footer>
)

export default Rodape