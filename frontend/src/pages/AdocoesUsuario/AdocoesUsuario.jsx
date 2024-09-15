import React, { useState, useEffect } from 'react'
import './AdocoesUsuario.css'
import MinhasAdocoesCard from '../../components/MinhasAdocoesCard/MinhasAdocoesCard'
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import axios from 'axios'

const AdocoesUsuario = () => {

    const { token, url } = useContext(AppContext);
    const [petsDeInteresse, setPetsDeInteresse] = useState([]);



    useEffect(() => {
        const fetchPetsDeInteresse = async () => {
            try {
                const response = await axios.get(`${url}/user/list`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Token de autenticação
                    }
                })

                if (response.data.success) {

                    setPetsDeInteresse(response.data.data);

                }
            } catch (error) {
                console.error("Erro ao listar pets de interesse", error);
            }
        }
        fetchPetsDeInteresse();
    }, [token,url])

    return (
        <div className='user-adoptions-page'>
            <UserSidebar />
            <div className="user-adoptions-page-content">
                {petsDeInteresse.length > 0 ? (
                    petsDeInteresse.map(pet => (
                        <MinhasAdocoesCard key={pet._id} pet={pet} url={url}/>
                    ))
                ) : (
                    <p>Você ainda não tem nenhum pet de interesse.</p>
                )}

            </div>
        </div>
    )
}

export default AdocoesUsuario
