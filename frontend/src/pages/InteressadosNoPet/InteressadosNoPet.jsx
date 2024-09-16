import React, { useEffect, useState } from 'react'
import './InteressadosNoPet.css'
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import InteressadosNoPetCard from '../../components/InteressadosNoPetCard/InteressadosNoPetCard'
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const InteressadosNoPet = () => {
    const [usuariosInteressados, setUsuariosInteressados] = useState([]);
    const { token, url } = useContext(AppContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const buscaUsuariosInteressados = async () => {
            try {

                const response = await axios.get(`${url}/user/interessados-pet/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Token de autenticação
                    }
                });

                setUsuariosInteressados(response.data.data); // Salva os usuários interessados no estado
                if (response.data.success) {

                    console.log(response.data.data);

                }
            } catch (error) {
                console.error("Erro ao buscar usuários interessados no pet:", error);
            }
        };

        buscaUsuariosInteressados();
    }, [id, token, url]); // Executa a busca quando o idPet, token ou url mudarem


    return (
        <div className='users-interested-in'>
            <UserSidebar />
            <div className="users-interested-in-pets">
                {usuariosInteressados.length > 0 ? (
                    usuariosInteressados.map(usuario => (
                        <InteressadosNoPetCard key={usuario._id} usuario={usuario} />
                    ))
                ) : (
                    <div className="no-users-interested">
                        <p>Nenhum usuário interessado nesse pet.</p>
                        <button onClick={() => { navigate("/user/mypets") }}>Voltar</button>
                   </div>
                    
                    
                )}
        </div>
        </div >
    )
}

export default InteressadosNoPet
