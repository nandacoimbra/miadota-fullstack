import React from 'react'
import './Footer.css'
import { Cat, Copyright, InstagramLogo, FacebookLogo, Envelope, User } from "phosphor-react";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-container-left">
                    <Cat size={70} />
                    <h3>MIAdota</h3>
                </div>
                <div className="footer-container-middle">
                    <ul className='navlinks'>
                        <li>Home</li>
                        <li>Adotar</li>
                        <li>Cadastrar Pet</li>
                        <li>Sobre</li>
                        <li><User size={25} /></li>
                    </ul>
                </div>
                <div className="footer-container-right">
                    <h6>Contato</h6>
                    <div className="social-icons">
                        <InstagramLogo size={25} />
                        <FacebookLogo size={25} />
                        <Envelope size={25} />
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright'>Todos os direitos reservados <Copyright size={16} /></p>
        </footer>
    )
}

export default Footer
