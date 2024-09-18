import React from 'react'
import './NovoPetUsuario.css'
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import CadastroPet from '../../components/CadastroPet/CadastroPet'
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const NovoPetUsuario = () => {

    const url = "http://localhost:3000";
    const [imagem, setImagem] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        nome: "",
        especie: "gato",
        sexo: "macho",
        cidade: "",
        estado: "",
        descricao: ""
       
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    //chamada da api
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        //FormData(): interface que lida com envio de dados (texto, imgs, etc) via requisições http 
        const dadosForm = new FormData();
        dadosForm.append("nome", data.nome);
        dadosForm.append("especie", data.especie);
        dadosForm.append("sexo", data.sexo);
        dadosForm.append("cidade", data.cidade);
        dadosForm.append("estado", data.estado);
        dadosForm.append("descricao", data.descricao);
        dadosForm.append("imagem", imagem);

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${url}/pet/add`, dadosForm, {
                headers: {
                    "Authorization": `Bearer ${token}`

                }
            });

            if (response.data.success) {
                setData({
                    nome: "",
                    especie: "gato",
                    sexo: "macho",
                    cidade: "",
                    estado: "",
                    descricao: ""
                });
                setImagem(false);
                toast.success(response.data.message);
                console.log(response.data);
                

            } else {
                toast.error(response.data.message);
            }
        } catch (error) {

        }


    }

    return (
        <div className='user-new-pet-page'>
            <UserSidebar />
            <div className='user-new-pet-page-content'>
                <CadastroPet imagem={imagem} setImagem={setImagem} data={data} setData={setData} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
            </div>
        </div>
    )
}

export default NovoPetUsuario
