import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import './DetalhesAnimal.css'
import DetalhesPet from '../../components/DetalhesPet/DetalhesPet'
import Loading from '../../components/Loading/Loading';
import { AppContext } from '../../context/AppContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"


const DetalhesAnimal = () => {

  const { id } = useParams();  // Recupera o ID da URL
  const [pet, setPet] = useState(null);
  const { petsParaAdocao, url } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Busca o pet correspondente pelo ID na lista de pets
    const petEncontrado = petsParaAdocao.find(pet => pet._id === id);
    setPet(petEncontrado);
  }, [id]);

  //funcao que chama a api para adicionar o pet a lista de pets que o usuário tem interesse
  const manifestarInteresse = async (idPet) => {
    try {
      //supondo que o usuario já esteja loggado (mudar depois)
      const token = localStorage.getItem("token");

      if(!token){
        toast.error("Necessário realizar login!")
        navigate("/login");
      }

      const response = await axios.post(
        `${url}/user/interest`,
        { idPet },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Verifica a resposta do servidor
      if (response.data.success) {
        toast.success('Pet adicionado à lista de interesse!');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Erro ao adicionar pet de interesse", error);
      
    }
  }

  if (!pet) {
    return <Loading />;  //loading na tela caso o pet não seja encontrado
  }

  return (
    <div className='animal-details-page'>
      {/* Renderizando o componente DetalhesPet com os dados passados */}
      <DetalhesPet
        id={pet._id}
        imagem={pet.imagem}
        nome={pet.nome}
        sexo={pet.sexo}
        cidade={pet.cidade}
        estado={pet.estado}
        descricao={pet.descricao}
        especie={pet.especie}
        url={url}
        manifestarInteresse={manifestarInteresse}
      />
    </div>
  )
}

export default DetalhesAnimal

