import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import './Navbar.css'
import { Cat, User, SignOut, UserSquare } from "phosphor-react";
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';


const Navbar = () => {

    const [hamburgerOn, setHamburgerOn] = useState(false);
    const { token, setToken } = useContext(AppContext);
    const navigate = useNavigate();

    //logout do usuario
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");

    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (hamburgerOn && !event.target.closest('.navbar')) {
            setHamburgerOn(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [hamburgerOn]);


    return (

        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><Cat size={50} alt='Home' /> MIAdota</Link>
                <button className="navbar-toggler" onClick={() => setHamburgerOn(!hamburgerOn)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={(hamburgerOn ? "show " : "") + "collapse navbar-collapse nav-items"} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="#" to="/" onClick={() => setHamburgerOn(false)}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#catalogo-de-pets" onClick={() => setHamburgerOn(false)}>Adotar</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => {
                                setHamburgerOn(false);
                                {
                                    //testa se o usuario está logado (token salvo no localstorage)
                                    token ? navigate("/user/newpet")
                                        : navigate("/login")
                                }

                            }}>Cadastrar Pet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer" onClick={() => setHamburgerOn(false)}>Contato</a>
                        </li>
                        <li className="nav-item">
                            {!token ? <Link className='nav-login-button' to="/login" onClick={() => setHamburgerOn(false)}>Entrar</Link>
                                : <div className="nav-user-profile">
                                    <User size={32} className="nav-user-icon" />
                                    <ul className="nav-profile-dropdown">
                                        <li onClick={() => {
                                            navigate("/user/data");
                                            setHamburgerOn(false);
                                        }}><span>Minha Conta</span></li>
                                        <hr />
                                        <li onClick={logout}><span>Sair</span></li>
                                    </ul>
                                </div>
                            }
                            {/* <Link className="nav-link" to="/login"  onClick={()=>setHamburgerOn(false)}><User size={32} alt='Entrar'/></Link> */}
                            {/* <Link className="nav-link" to="/login" onClick={() => setHamburgerOn(false)}>

                            </Link> */}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
