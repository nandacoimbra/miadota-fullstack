import React from 'react'
import './Sidebar.css'
import { FilePlus, PawPrint, Heart} from "phosphor-react"
import {NavLink} from "react-router-dom"



const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar-buttons">
                <NavLink to="/list" className="active-sidebar-button sidebar-button"><button><PawPrint size={25} alt='Para adoção'/><span>Disponíveis</span></button></NavLink>
                <NavLink to="/requests" className="active-sidebar-button sidebar-button"><button><FilePlus size={25} alt='Novos Pets'/><span>Novos</span></button></NavLink>
                <NavLink to="/adopted" className="active-sidebar-button sidebar-button"><button><Heart size={32} alt='Adotados'/><span>Adotados</span></button></NavLink>
       
            </div>
        </aside>
    )
}

export default Sidebar
