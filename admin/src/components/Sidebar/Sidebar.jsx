import React from 'react'
import './Sidebar.css'
import { FilePlus, PawPrint } from "phosphor-react"
import {NavLink} from "react-router-dom"



const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar-buttons">
                <NavLink to="/list" className="active-sidebar-button sidebar-button"><button><PawPrint size={25} /><span>Disponíveis</span></button></NavLink>
                <NavLink to="/requests" className="active-sidebar-button sidebar-button"><button><FilePlus size={25} /><span>Solicitações</span></button></NavLink>
                
            </div>
        </aside>
    )
}

export default Sidebar
