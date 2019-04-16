import React, {Fragment} from 'react'
import Titulo from '../../components/Titulo'
import Carousel from '../../components/Carousel'
import './style.css'

const Home = (props) =>(
    <Fragment>
        
        <div className="containerBox">
            <Titulo tituloText="Alguns de Nossos Parceiros"/>
            <span className="subTitulo">Mais de 1.200 instituições cadastradas</span>
        </div>
        
        <img className="bannerParceiros" src={require('../../img/banner-parceiros.gif')} alt="Mais de 1.200 instituições Parceiras" />

        <div className="containerBox">
            <Titulo tituloText="Instituições em Destaque"/>
            <Carousel />
        </div>

    </Fragment>
)

export default Home