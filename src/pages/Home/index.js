import React, {Fragment} from 'react'
import Titulo from '../../components/Titulo'
import './style.css'

const Home = (props) =>(
    <Fragment>
        
        <div className="containerBox">
            <Titulo tituloText="Alguns de Nossos Parceiros"/>
            <span className="subTitulo">Mais de 1.200 instituições cadastradas</span>
            <img className="bannerParceiros" src={require('../../img/banner-parceiros.gif')} alt="Mais de 1.200 instituições Parceiras" />
        </div>

        <div className="containerBox">
            <Titulo tituloText="Instituições em Destaque"/>
        </div>

    </Fragment>
)

export default Home