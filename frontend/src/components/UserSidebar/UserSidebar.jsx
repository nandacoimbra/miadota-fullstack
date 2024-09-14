import React from 'react'
import './UserSidebar.css'
import { NavLink } from 'react-router-dom'
import { User,Heart,FilePlus,PawPrint } from 'phosphor-react'


const UserSidebar = ({ opcaoUsuario, setOpcaoUsuario }) => {
  return (
    <aside className='user-sidebar'>
      <NavLink className='user-sidebar-link' to="/user/data"><User size={25} /><span>Dados</span></NavLink>
      <NavLink className='user-sidebar-link' to="/user/adoptions"><Heart size={25}/><span>Adoções</span></NavLink>
      <NavLink className='user-sidebar-link' to="/user/mypets"><PawPrint size={25}/><span>Cadastrados</span></NavLink>
      <NavLink className='user-sidebar-link' to="/user/newpet"><FilePlus size={25} /><span>Novo Pet</span></NavLink>
    </aside>
  )
}

export default UserSidebar
