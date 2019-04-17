import React, {Fragment} from 'react'

import Titulo from '../../components/Titulo'

const ComoFunciona = (props) =>(
    <Fragment>
        
        <section className="containerTitulo">
            <Titulo tituloText="Como Funciona" />
        </section>
]       
        <section className="containerComoFunciona">
            
            <div className="containerList">

                <ul className="listaComoFunciona">
                    <li className="itemComoFunciona">
                        <i className="fa fa-check iconList"></i>
                        Escolha a região e série pretendida.
                    </li>
                    <li className="itemComoFunciona">
                        <i className="fa fa-check iconList"></i>
                        Veja lista das instituições e valores disponíveis.
                    </li>
                    <li className="itemComoFunciona">
                        <i className="fa fa-check iconList"></i>
                        Selecione a instituição de sua preferência.
                    </li>
                    <li className="itemComoFunciona">
                        <i className="fa fa-check iconList"></i>
                        O programa fará seleção eletrônica e verificará a disponibilidade de vaga.
                    </li>
                    <li className="itemComoFunciona">
                        <i className="fa fa-check iconList"></i>
                        Após cadastro você será direcionado para tela de pagamento da taxa de adesão.   ( veja valor no menu  “Dúvidas Frequentes” ).
                    </li>
                    <li className="itemComoFunciona">
                        <i className="fa fa-check iconList"></i>
                        Após confirmação do pagamento enviamos para o e-mail cadastrado a carta de apresentação para ser entregue na instituição no ato da matrícula.
                    </li>
                    <li className="itemComoFunciona">
                        <i className="fa fa-check iconList"></i>
                        O pagamento da taxa de adesão garante ao aluno o acesso a bolsa de estudos porém será necessário apresentar toda a documentação exigida bem como estar de acordo com o regimento interno da instituição concedente.
                    </li>
                </ul>
            </div>

            <div className="containerImagem">
                <img 
                    src={require('../../img/img_box_lateral.jpg')}
                    className="imgLateral"
                    alt="Entre Em contato"
                />
            </div>

        </section>

    </Fragment>
)

export default ComoFunciona