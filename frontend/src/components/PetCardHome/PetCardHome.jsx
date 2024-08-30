import React from 'react'
import './PetCardHome.css'
import { MapPinLine } from 'phosphor-react'

const PetCardHome = ({ id, imagem, nome, sexo, cidade, estado, descricao, status, especie }) => {
    return (
        <div className='pet-card-body'>
            <div className="pet-card-img-container">
                <img src={imagem} alt="" />
            </div>
            <div className="pet-card-info">
                <h6 className='pet-nome'>{nome}</h6>
                <p className='pet-sexo'>{sexo}</p>
                <div className="pet-local">
                    <MapPinLine size={25} />
                    <p>{cidade} - {estado}</p>
                </div>
                <button className='detalhes-button'>Detalhes</button>
            </div>
        </div>
    )
}

export default PetCardHome
