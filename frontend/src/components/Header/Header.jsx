import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <div className="header-img">
                    <img src={assets.cat_dog_header} alt="" />
                </div>
                <div className="header-text">
                    <p>Olá! Somos a</p>
                    <h1>MIAdota</h1>
                    <p>Venha buscar seu melhor amigo!</p>
                    <div className='header-buttons'>
                        <a className='adopt-button' href='#catalogo-de-pets'>Adotar</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header
