import React from 'react'
import './Adotados.css'
import PetCardAdotado from '../../components/PetCardAdotado/PetCardAdotado'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'



const Adotados = () => {

  const url = "http://localhost:3000";
  const [petList, setPetList] = useState([]);

  //chamada da api
  const fetchList = async () => {
    try {
      const params = new URLSearchParams({ status: 'ADOTADO' });
      const response = await axios.get(`${url}/pet/filter`, { params });
      console.log(response.data);

      if (response.data.success) {
        setPetList(response.data.data);
      } else {
        toast.error("Nenhum pet encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar pets adotados:", error.message);
      toast.error("Erro ao buscar pets adotados");
    }
  }

  //chama a funcao fetchLits sempre q a página é recarregada
  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='adopted-pets'>


      {
        petList.length > 0 ? (
          petList.map((pet) => {
            return <PetCardAdotado key={pet._id} imagem={`${url}/images/` + pet.imagem} pet={pet} />
          })
        ) : (
          <h3 className='page-title'>Nenhum pet adotado</h3>
        )



      }


    </div>
  )
}

export default Adotados
