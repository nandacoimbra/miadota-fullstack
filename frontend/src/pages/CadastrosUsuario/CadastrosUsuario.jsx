import React, { useEffect, useState } from 'react'
import './CadastrosUsuario.css'
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import PetsAddPorMim from '../../components/PetsAddPorMim/PetsAddPorMim'
import axios from 'axios'


const CadastrosUsuario = () => {
    const [petsCadastrados, setPetsCadastrados] = useState([]);
    const url = "http://localhost:3000";

    useEffect(() => {

        const fetchPets = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${url}/pet/meus-pets`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data.success) {
                    setPetsCadastrados(response.data.data);
                    console.log(response.data.data)
                }

            } catch (error) {
                console.error("Erro ao listar pets cadastrados pelo usuário", error);
            }
        };

        fetchPets();
    }, [])
    return (
        <div className='user-added-page'>
            <UserSidebar />
            <div className='user-added-page-content'>
                <h3 className='page-title'>Meus Pets</h3>
                <div className="added-pets">
                    {petsCadastrados.length > 0 ? (
                        <>
                            {petsCadastrados.map(pet => (
                                <PetsAddPorMim key={pet._id} pet={pet} url={url} />
                            ))}
                        </>
                    ) : (
                        <p>Você ainda não tem nenhum pet cadastrado.</p>
                    )}
                </div>

            </div>
        </div>
    )
}

export default CadastrosUsuario
