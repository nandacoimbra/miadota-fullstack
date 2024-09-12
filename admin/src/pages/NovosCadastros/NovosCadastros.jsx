import React from 'react'
import './NovosCadastros.css'
import PetCardAprovacao from '../../components/PetCardAprovacao/PetCardAprovacao.jsx'

const NovosCadastros = () => {
  return (
    
    <div className='new-requests'>
      <PetCardAprovacao/>
      <PetCardAprovacao/>
      <PetCardAprovacao/>
      <PetCardAprovacao/>
    </div>
  )
}

export default NovosCadastros
