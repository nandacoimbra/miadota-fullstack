import React from 'react'
import { useState} from 'react';
import './Navbar.css'
import { Cat, User } from "phosphor-react";
import { assets } from '../../assets/assets';

const Navbar = () => {

    const [hamburgerOn,setHamburgerOn] = useState(false);
    return (


        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><Cat size={50} alt='Home'/> MIAdota</a>
                <button className="navbar-toggler" onClick={()=>setHamburgerOn(!hamburgerOn)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={(hamburgerOn? "show":"") + "collapse navbar-collapse nav-items"} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"  onClick={()=>setHamburgerOn(false)}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"  onClick={()=>setHamburgerOn(false)}>Adotar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"  onClick={()=>setHamburgerOn(false)}>Cadastrar Pet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"  onClick={()=>setHamburgerOn(false)}>Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"  onClick={()=>setHamburgerOn(false)}><User size={32} alt='Entrar'/></a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
