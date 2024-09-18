import React, { useContext, useEffect, useState } from 'react'
import './CatalogoDePets.css'
import { AppContext } from '../../context/AppContext'
import PetCardHome from '../PetCardHome/PetCardHome';
import axios from 'axios';

const CatalogoDePets = ({ especie }) => {

    const { petsParaAdocao, url } = useContext(AppContext);
    const [petsFiltrados, setPetsFiltrados] = useState([]);

    const fetchPetsFiltrados = async (filtros) => {
        try {
            //monta os parametros de consulta com base nos filtros passado, nesse caso, status===true, pet para aprovado para adoção
            const params = new URLSearchParams(filtros);

            const response = await axios.get(`${url}/pet/filter`,{params});

            if (response.data.success) {
                setPetsFiltrados(response.data.data)
            }

        } catch (error) {
            console.error("Erro ao buscar pets filtrados", error);

        }
    }

    useEffect(() => {
       
        const filtros = {
            status: 'APROVADO',
            especie: especie || "", 
        };
        console.log(especie);
        fetchPetsFiltrados(filtros);
    }, [especie])
    return (
        <div className='catalogo-de-pets' id='catalogo-de-pets'>
            <div className="pets-para-adocao">
                {
                    petsFiltrados.map((pet) => {
                        return <PetCardHome key={pet._id} pet={pet} url={url} />
                    })

                }
            </div>
        </div>
    )
}

export default CatalogoDePets
