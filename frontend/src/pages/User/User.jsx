import React, { useContext, useState } from 'react'
import './User.css'
import DadosUsuario from '../../components/DadosUsuario/DadosUsuario'
import MinhasAdocoesCard from '../../components/MinhasAdocoesCard/MinhasAdocoesCard'
import { AppContext } from '../../context/AppContext'
import PetsAddPorMim from '../../components/PetsAddPorMim/PetsAddPorMim'
import UserSidebar from '../../components/UserSidebar/UserSidebar'

const User = () => {
  const { petsParaAdocao } = useContext(AppContext);
  const [opcaoUsuario, setOpcaoUsuario] = useState("minhas-adocoes");
  return (
    <div className='user-page'>
      <UserSidebar opcaoUsuario={opcaoUsuario} setOpcaoUsuario={setOpcaoUsuario} />
      <div className="user-page-content">
        {opcaoUsuario === "meus-dados"
          ? <DadosUsuario />
          : opcaoUsuario === "minhas-adocoes" ? <MinhasAdocoesCard /> : <PetsAddPorMim />
        }
      </div>
    </div>
  )
}

export default User
