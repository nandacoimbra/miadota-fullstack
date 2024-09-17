import React from 'react'
import "./PageDadosUsuario.css"
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import DadosUsuario from '../../components/DadosUsuario/DadosUsuario'
import { useEffect, useState } from 'react';
import axios from 'axios';

const PageDadosUsuario = () => {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = "http://localhost:3000";


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
            } finally {
                setLoading(false);
            }
        };

        buscaDadosUsuario();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!usuario) {
        return <div>Nenhum dado do usuário encontrado.</div>;
    }

    return (
        <div className='user-data-page'>
            <UserSidebar />
            <div className="user-data-content">
                <DadosUsuario key={usuario._id} usuario={usuario} url={url}/>
            </div>
        </div>
    )
}

export default PageDadosUsuario
