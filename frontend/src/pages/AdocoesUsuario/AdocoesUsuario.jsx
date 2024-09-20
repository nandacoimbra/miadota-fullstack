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
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        const fetchPetsDeInteresse = async () => {
            try {
                const response = await axios.get(`${url}/user/pets-interesse`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Token de autenticação
                    }
                })

                if (response.data.success) {

                    setPetsDeInteresse(response.data.data);
                    console.log(petsDeInteresse)
                }

                // Faz a requisição para a rota /user/data, enviando o token no cabeçalho
                const res = await axios.get(`${url}/user/data`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (res.data.success) {
                    setUsuario(res.data.data);
                    console.log(usuario)
                } else {
                    console.error('Erro ao buscar dados do usuário:', res.data.message);
                }

            } catch (error) {
                console.error("Erro ao listar pets de interesse", error);
            }
        }
        fetchPetsDeInteresse();
    }, [token, url])

    return (
        <div className='user-adoptions-page'>
            <UserSidebar />
            <div className="user-adoptions-page-content">

                <h3 className='page-title'>Quero Adotar</h3>
                <div className="user-adoptios">
                    {petsDeInteresse ? (
                        petsDeInteresse.map(pet => (
                            <MinhasAdocoesCard key={pet._id} pet={pet} url={url} usuario={usuario}/>
                        ))
                    ) : (
                        <p>Você ainda não tem nenhum pet de interesse.</p>
                    )}
                </div>


            </div>
        </div>
    )
}

export default AdocoesUsuario
