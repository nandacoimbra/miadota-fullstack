import React, { useState } from 'react'
import './CadastroPet.css'
import { assets } from '../../assets/assets'
import axios from "axios";
import { toast } from 'react-toastify';


const CadastroPet = () => {

    const url = "http://localhost:3000";
    const [imagem, setImagem] = useState(false);
    const [data, setData] = useState({
        nome: "",
        especie: "gato",
        sexo: "macho",
        cidade: "",
        estado: "",
        descricao: "",
        status: false,
        adotado: false,
        responsavel: "",
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
        dadosForm.append("status", data.status);
        dadosForm.append("imagem", imagem);
        dadosForm.append("responsavel", data.responsavel);
        dadosForm.append("adotado", data.adotado);

        const response = await axios.post(`${url}/pet/add`, dadosForm);

        if (response.data.success) {
            setData({
                nome: "",
                especie: "gato",
                sexo: "macho",
                cidade: "",
                estado: "",
                descricao: "",
                status: false,
                adotado: false,
                responsavel: ""

            });
            setImagem(false);
            toast.success(response.data.message);

        } else {
            toast.error(response.data.message);
        }

    }

    return (
        <div className='add-pet-container'>
            <h2 className='add-pet-title'>Cadastro de Pet</h2>
            <form className='add-pet-form' onSubmit={onSubmitHandler}>
                <div className='add-pet-name'>
                    <label htmlFor="">Nome do pet:</label>
                    <input onChange={onChangeHandler} value={data.nome} type="text" name='nome' />
                </div>
                <div className='add-pet-species'>
                    <label htmlFor="">Espécie:</label>
                    <select name="especie" id="" onChange={onChangeHandler} value={data.especie}>
                        <option value="cao">Cão</option>
                        <option value="gato">Gato</option>
                    </select>
                </div>
                <div className='add-pet-sex'>
                    <label htmlFor="">Sexo:</label>
                    <select name="sexo" id="" onChange={onChangeHandler} value={data.sexo}>
                        <option value="femea">Fêmea</option>
                        <option value="macho">Macho</option>
                    </select>
                </div>
                <div className='add-pet-city-state'>
                    <div className='pet-city'>
                        <label htmlFor="">Cidade:</label>
                        <input type="text" name='cidade' onChange={onChangeHandler} value={data.cidade} />
                    </div>
                    <div className='pet-state'>
                        <label htmlFor="">Estado:</label>
                        <input type="text" name='estado' onChange={onChangeHandler} value={data.estado} />
                    </div>
                </div>
                <div className='add-pet-responsavel'>
                    <label htmlFor="">Responsável:</label>
                    <input onChange={onChangeHandler} value={data.responsavel} type="text" name='responsavel' />
                </div>
                <div className='add-pet-description'>
                    <label htmlFor="">Descrição:</label>
                    <textarea name="descricao" id="" cols={25} rows={5} onChange={onChangeHandler} value={data.descricao}>
                    </textarea>
                </div>
                <div className="add-pet-image">
                    <label htmlFor="image" className='upload-image'>
                        <img src={imagem ? URL.createObjectURL(imagem) : assets.image_upload} alt="" className='uploaded-image' />
                    </label>
                    <input onChange={(e) => setImagem(e.target.files[0])} type="file" required name="imagem" id='image' />
                </div>
                <button type='submit' className='add-pet-button'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CadastroPet
