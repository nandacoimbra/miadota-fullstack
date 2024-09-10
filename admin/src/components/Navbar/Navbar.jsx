import React from 'react'
import "./Navbar.css"
import {Cat,User} from "phosphor-react"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="left-content">
        <Cat size={32}/>
        <h3>MIAdota</h3>
      </div>
      <div className="middle-content">
        <h3>Administrador</h3>
      </div>
      <div className="right-content">
        <User size={25}/>
      </div>
    </nav>
  )
}

export default Navbar
