import React from 'react'
import './NovosCadastros.css'
import PetCardAprovacao from '../../components/PetCardAprovacao/PetCardAprovacao.jsx'
import { useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NovosCadastros = () => {

  const url = "http://localhost:3000";
  const [petList, setPetList] = useState([]);
  const navigate = useNavigate();

  //chamada lista pet da api
  const fetchList = async () => {
    const response = await axios.get(`${url}/pet/list`);
    console.log(response.data);
    if (response.data.success) {
      setPetList(response.data.data);
    } else {
      toast.error("Error");
    }
  }

  //chamada endpoint altera status pet
  const alteraStatus = async (petId, novoStatus) => {
    console.log(novoStatus, petId)
    try {
      const response = await axios.patch(`${url}/pet/status/${petId}`, { status: novoStatus });

      if (response.data.success) {
        toast.success("Pet movido para a aba disponíveis")
        //atualiza a lista de pets 
        fetchList()
        //navega para a pág de pets disponíveis
        navigate('/list');
      } else {
        toast.error("Erro ao atualizar status do pet");
      }

    } catch (error) {
      console.error("Erro ao alterar status:", error);
      toast.error("Erro ao alterar status do pet");
    }

  }

  //chama a funcao fetchLits sempre q a página é recarregada
  useEffect(() => {
    fetchList();
  }, [])
  return (

    <>
    <h2 className='page-title'>Pets para Aprovação</h2>
        <div className='new-requests'>
      {
        petList.filter(pet => pet.status === false).map((pet) => {
          return <PetCardAprovacao alteraStatus={alteraStatus} key={pet._id} id={pet._id} imagem={`${url}/images/` + pet.imagem} nome={pet.nome} especie={pet.especie} cidade={pet.cidade} estado={pet.estado} descricao={pet.descricao} status={pet.status} responsavel={pet.responsavel} />
        })
      }
    </div>
    </>

  )
}

export default NovosCadastros
