import React from 'react'
import './UserSidebar.css'

const UserSidebar = ({opcaoUsuario,setOpcaoUsuario}) => {
  return (
    <aside className='sidebar'>
      <button onClick={()=>{setOpcaoUsuario("meus-dados")}}>Meus Dados</button>
      <button onClick={()=>{setOpcaoUsuario("minhas-adocoes")}}>Minhas Adoções</button>
      <button onClick={()=>{setOpcaoUsuario("cadastrados-por-mim")}}>Animais Cadastrados</button>
    </aside>
  )
}

export default UserSidebar
