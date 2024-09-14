import React from 'react'
import './NovosCadastros.css'
import PetCardAprovacao from '../../components/PetCardAprovacao/PetCardAprovacao.jsx'
import { useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const NovosCadastros = () => {

  const url = "http://localhost:3000";
  const [petList, setPetList] = useState([]);

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

  //chama a funcao fetchLits sempre q a página é recarregada
  useEffect(() => {
    fetchList();
  }, [])
  return (
    
    <div className='new-requests'>
       {
        petList.filter(pet=>pet.status === false ).map((pet)=>{
          return <PetCardAprovacao key={pet.id} imagem={`${url}/images/`+pet.imagem} nome={pet.nome} especie={pet.especie} cidade={pet.cidade} estado={pet.estado} descricao={pet.descricao} status={pet.status} responsavel={pet.responsavel}/>
        })
      }
    </div>
  )
}

export default NovosCadastros
