import React, { useContext } from 'react'
import './User.css'
import DadosUsuario from '../../components/DadosUsuario/DadosUsuario'
import MinhasAdocoesCard from '../../components/MinhasAdocoesCard/MinhasAdocoesCard'
import { AppContext } from '../../context/AppContext'

const User = () => {
  const { petsParaAdocao } = useContext(AppContext);
  return (
    <div className='user-page'>
      <DadosUsuario />
      <MinhasAdocoesCard />
    </div>
  )
}

export default User
