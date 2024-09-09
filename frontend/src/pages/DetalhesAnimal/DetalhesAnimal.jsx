import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './DetalhesAnimal.css'
import DetalhesPet from '../../components/DetalhesPet/DetalhesPet'
import { petsParaAdocao } from '../../assets/assets';
import Loading from '../../components/Loading/Loading';


const DetalhesAnimal = () => {

  const { id } = useParams();  // Recupera o ID da URL
  const [pet, setPet] = useState(null);

  useEffect(() => {
    // Busca o pet correspondente pelo ID na lista de pets
    const petEncontrado = petsParaAdocao.find(pet => pet.id.toString() === id);
    console.log(petEncontrado);
    setPet(petEncontrado);
  }, [id]);

  if (!pet) {
    return <Loading />;  // Ou uma mensagem de erro caso o pet não seja encontrado
  }
  return (
    <div className='animal-details-page'>
      {/* Renderizando o componente DetalhesPet com os dados passados */}

      <DetalhesPet
        id={pet.id}
        imagem={pet.imagem}
        nome={pet.nome}
        sexo={pet.sexo}
        cidade={pet.cidade}
        estado={pet.estado}
        descricao={pet.descricao}
        especie={pet.especie}
      />
    </div>
  )
}

export default DetalhesAnimal

