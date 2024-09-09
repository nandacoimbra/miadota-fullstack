import React from 'react'
import './DetalhesAnimal.css'
import DetalhesPet from '../../components/DetalhesPet/DetalhesPet'
import { useLocation } from 'react-router-dom'

const DetalhesAnimal = () => {

  // Hook para acessar o estado passado via `navigate`
  const { state } = useLocation();
  return (
    <div className='animal-details-page'>
      {/* Renderizando o componente DetalhesPet com os dados passados */}

      <DetalhesPet
        id={state?.id}
        imagem={state?.imagem}
        nome={state?.nome}
        sexo={state?.sexo}
        cidade={state?.cidade}
        estado={state?.estado}
        descricao={state?.descricao}
        especie={state?.especie}
      />
    </div>
  )
}

export default DetalhesAnimal

