import React, { useEffect, useState } from 'react'
import './InteressadosNoPet.css'
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import InteressadosNoPetCard from '../../components/InteressadosNoPetCard/InteressadosNoPetCard'
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const InteressadosNoPet = () => {
    const [usuariosInteressados, setUsuariosInteressados] = useState([]);
    const [pet, setPet] = useState({});
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
                if (response.data.success) {
                    setUsuariosInteressados(response.data.data); // Salva os usuários interessados no estado
                    console.log(response.data.data);
                }

                const res = await axios.get(`${url}/pet/${id}`);

                if (res.data.success) {
                    setPet(res.data.data); // Salva o pet
                    console.log(res.data.data);
                }

            } catch (error) {
                console.error("Erro ao buscar usuários interessados no pet:", error);
            }
        };

        buscaUsuariosInteressados();
    }, [id, token, url]); // Executa a busca quando o idPet, token ou url mudarem

    const atualizaPet = (petAtualizado) => {
        const alteraPet = async () => {
            try {

               const response = await axios.patch(`${url}/pet/${id}`, petAtualizado );
               setPet(response.data.data);

            } catch (error) {
                toast.error("Erro ao alterar situação do pet");
                console.log(response.data.message);
            }
        }

        alteraPet();
    };

    return (
        <div className='users-interested-in'>
            <UserSidebar />
            <div className="users-interested-in-pets">
                <h3 className='page-title'>Interessados no Pet</h3>
                <div className="users-interested">
                    {usuariosInteressados.length > 0 ? (
                        usuariosInteressados.map(usuario => (
                            <InteressadosNoPetCard key={usuario._id} usuario={usuario} pet={pet} atualizaPet={atualizaPet}/>
                        ))
                    ) : (
                        <div className="no-users-interested">
                            <p>Nenhum usuário interessado nesse pet.</p>
                            
                        </div>


                    )}
                </div>
                <button className='back-button' onClick={() => { navigate("/user/mypets") }}>Voltar</button>
            </div>
        </div >
    )
}

export default InteressadosNoPet
