import React from 'react'
import './ListaPets.css'
import { useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import PetCardDisponivel from '../../components/PetCardDisponivel/PetCardDisponivel';


//lista pets disponíveis no site
const ListaPets = () => {

  const url = "http://localhost:3000";
  const [petList, setPetList] = useState([]);

  //chamada da api
  const fetchList = async () => {
    const params = new URLSearchParams();
    params.append('status', 'APROVADO');
    params.append('status', 'EM_ADOCAO');
    const response = await axios.get(`${url}/pet/filter`,{params});
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

    <>
      <h2 className='page-title'>Disponíveis para Adoção</h2>
      <div className="available-pets">

        {
          petList.map((pet) => {
            return <PetCardDisponivel key={pet._id} imagem={`${url}/images/` + pet.imagem} pet={pet} />
          })
        }
      </div>
    </>
  )
}

export default ListaPets
