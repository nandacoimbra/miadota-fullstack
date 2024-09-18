import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import './DetalhesAnimal.css'
import DetalhesPet from '../../components/DetalhesPet/DetalhesPet'
import Loading from '../../components/Loading/Loading';
import { AppContext } from '../../context/AppContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"


const DetalhesAnimal = () => {

  const { id } = useParams();  // Recupera o ID da URL
  const [pet, setPet] = useState(null);
  const { url, user } = useContext(AppContext);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchPetsFiltrados = async () => {
      try {
        //monta os parametros de consulta com base nos filtros passado, nesse caso, status===true, pet para aprovado para adoção
        const params = new URLSearchParams({ _id: id });
        const response = await axios.get(`${url}/pet/filter/`, { params });
        if (response.data.success) {
          setPet(response.data.data[0]);
        }
      } catch (error) {
        console.error("Erro ao buscar pets filtrados", error);
  
      }
    }

    // Busca o pet correspondente pelo ID na lista de pets
    fetchPetsFiltrados();

  }, [id]);

  //funcao que chama a api para adicionar o pet a lista de pets que o usuário tem interesse
  const manifestarInteresse = async (idPet) => {
    try {
      //supondo que o usuario já esteja loggado (mudar depois)
      const token = localStorage.getItem("token");

      if (!token) {
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
        pet={pet}
        url={url}
        // caso o usuario logado seja o responsavel pelo pet detalhado
        //a opção de manifestar interesse no pet nao aparece
        manifestarInteresse={user._id != pet.responsavel._id ? manifestarInteresse : null}
      />
    </div>
  )
}

export default DetalhesAnimal

