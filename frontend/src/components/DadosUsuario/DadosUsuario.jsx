import React, { useState } from 'react'
import './DadosUsuario.css'
import axios from 'axios';
import {toast} from 'react-toastify'

const DadosUsuario = ({ usuario, url }) => {

    const [formData, setFormData] = useState({
        nome: usuario.nome || '',
        email: usuario.email || '',
        telefone: usuario.telefone || '',
        cidade: usuario.cidade || '',
        estado: usuario.estado || '',
    });

    // Função para lidar com mudanças nos inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para enviar dados atualizados ao backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');

            if (!token) {
                toast.error("Usuário não autenticado. Faça login.");
                return;
            }

            // Envia os dados atualizados para o backend
            const response = await axios.put(`${url}/user/data`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.success) {
                toast.success("Dados atualizados com sucesso!");
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            console.error("Erro ao atualizar dados do usuário:", error);
            toast.error("Erro ao atualizar dados.");
        }
    };

    return (
        <div className='user-data'>
            <h3 className=''>Meus dados</h3>
            <form onSubmit={handleSubmit} className='user-data-form'>
                <div className="user-name">
                    <label htmlFor="">Nome Completo:</label>
                    <input type="text" name="nome" id="" placeholder={usuario.nome}  value={formData.nome} onChange={handleInputChange}/>
                </div>
                <div className="user-email">
                    <label htmlFor="">E-mail:</label>
                    <input type="email" name="email" id="" placeholder={usuario.email} value={formData.email} onChange={handleInputChange}/>
                </div>
                <div className="user-phone">
                    <label htmlFor="">Telefone:</label>
                    <input type="tel" name="telefone" id="" placeholder={usuario.telefone}  value={formData.telefone} onChange={handleInputChange}/>
                </div>
                <div className="user-city-state">
                    <div className="user-city">
                        <label htmlFor="">Cidade:</label>
                        <input type="text" name="cidade" id="" placeholder={usuario.cidade} value={formData.cidade} onChange={handleInputChange}/>
                    </div>
                    <div className="user-state">
                        <label htmlFor="">Estado:</label>
                        <input type="text" name="estado" id="" placeholder={usuario.estado} value={formData.estado} onChange={handleInputChange}/>
                    </div>
                </div>
                {/* <div className="user-address">
                    <div className="user-street">
                        <label htmlFor="">Rua:</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="user-house-number">
                        <label htmlFor="">Número:</label>
                        <input type="number" name="" id="" />
                    </div>
                </div> */}
                <button className='edit-user-data-button' type="submit">Salvar Alterações</button>
            </form>
        </div>
    )
}

export default DadosUsuario
