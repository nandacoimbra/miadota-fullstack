import React from 'react'
import './ListaPets.css'
import { useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { assets } from '../../../../frontend/src/assets/assets';
import PetCardAprovacao from '../../components/PetCardAprovacao/PetCardAprovacao';
import PetCardDisponivel from '../../components/PetCardDisponivel/PetCardDisponivel';


//lista pets disponíveis no site
const ListaPets = () => {

  const url = "http://localhost:3000";
  const [petList, setPetList] = useState([]);

  //chamada da api
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

    <div className="available-pets">

      {
        petList.filter(pet=>pet.status===true).map((pet)=>{
          return <PetCardDisponivel key={pet._id} imagem={`${url}/images/`+pet.imagem} nome={pet.nome} especie={pet.especie} responsavel={pet.responsavel}/>
        })
      }
    </div>
  )
}

export default ListaPets
