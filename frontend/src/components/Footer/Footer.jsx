import React from 'react'
import './Footer.css'
import { Cat, Copyright, InstagramLogo, FacebookLogo, Envelope, User } from "phosphor-react";
import { useNavigate } from 'react-router-dom';



const Footer = () => {

    const navigate = useNavigate();
    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-container-left">
                    <Cat size={70} />
                    <h3>MIAdota</h3>
                </div>
                <div className="footer-container-middle">
                    <ul className='navlinks'>
                        <li onClick={()=>{navigate("/")}}>Home</li>
                        <li onClick={()=>{navigate("/#catalogo-de-pets")}}>Adotar</li>
                        <li onClick={()=>{navigate("/user/newpet")}}>Cadastrar Pet</li>
                        
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
