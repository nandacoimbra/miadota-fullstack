import React, { useState } from 'react'
import './PetsAddPorMim.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const PetsAddPorMim = ({ pet, url }) => {

    const [usuario,setUsuario] = useState({});

    const manipulaIdDoPet = () => {
        // Navega para a rota que lista os interessados, passando o ID do pet na URL
        navigate(`/user/mypets/interested/${pet._id}`);
        console.log(pet._id)
    }

    const navigate = useNavigate();

    useEffect(() => {

        const buscaDadosUsuario = async () => {
            try {
                // Obtém o token do localStorage
                const token = localStorage.getItem('token');

                if (!token) {
                    console.error('Usuário não autenticado');
                    return;
                }

                // Faz a requisição para a rota /user/data, enviando o token no cabeçalho
                const response = await axios.get(`${url}/user/data`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data.success) {
                    setUsuario(response.data.data);
                } else {
                    console.error('Erro ao buscar dados do usuário:', response.data.message);
                }

            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        };

        buscaDadosUsuario();
    }, []);

    return (
        <div className='my-pet-card'>
            <div className="my-pet-img-container">
                <img src={url + "/images/" + pet.imagem} alt="" />
            </div>
            <div className="my-pet-data">
                <h5>{pet.nome}</h5>
                <div className="my-pet-specie">
                    <span className='my-pet-label'>
                        Espécie:
                        {
                            pet.especie === 'cao' ? (
                                <span> Cão</span>
                            ) : (
                                <span> Gato</span>
                            )
                        }
                    </span>

                </div>
                {/* <div className="my-pet-date">
                    <span className='my-pet-label'>Data de Cadastro: <span>13/08/2024</span></span>

                </div> */}
                <div className="my-pet-local">
                    <span className='my-pet-label'>Local: <span>{pet.cidade}-{pet.estado}</span></span>

                </div>
                {/* <div className="my-pet-interested-list">
                    <span className='my-pet-label'>Pessoas interessadas: <span className='interested-list'>5</span></span>
                </div> */}
                <div className="">
                    <span className='my-pet-label'>Situação: </span>
                    <span>{pet.status}</span>
                </div>
                <button className='list-interested-people' onClick={manipulaIdDoPet}>Listar interessados</button>
            </div>
        </div>
    )
}

export default PetsAddPorMim
