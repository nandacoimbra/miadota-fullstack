import React from 'react'
import './PetCardHome.css'
import { MapPinLine } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

const PetCardHome = ({ id, imagem, nome, sexo, cidade, estado, descricao, status, especie, url }) => {

    const navigate = useNavigate();

    const mostraDetalhesPet = () => {
        // navega até a pág de detalhes do pet e passa os dados do pet pelo estado
        navigate(`/detalhes/${id}`);
    };

    return (
        <div className='pet-card-body' onClick={mostraDetalhesPet}>
            <div className="pet-card-img-container">
                <img src={url+"/images/"+imagem} alt="" />
            </div>
            <div className="pet-card-info">
                <h6 className='pet-nome'>{nome}</h6>
                <p className='pet-sexo'>{sexo}</p>
                <div className="pet-local">
                    <MapPinLine size={20} />
                    <p>{cidade} - {estado}</p>
                </div>
                <button className='detalhes-button' onClick={mostraDetalhesPet}>Adotar</button>
            </div>
        </div>
    )
}

export default PetCardHome
