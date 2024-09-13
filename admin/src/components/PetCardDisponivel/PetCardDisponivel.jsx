import React from 'react'
import './PetCardDisponivel.css'

const PetCardDisponivel = ({nome,imagem,especie}) => {
    return (
        <div className="available-pet">
            <div className="available-pet-img-container" >
                <img src={imagem} alt="" className="available-pet-img"/>
            </div>
            <div className="available-pet-data">
                <h5>{nome}</h5>
                <div className="available-pet-specie">
                    <span className='available-pet-label'>Espécie: <span>{especie}</span></span>

                </div>
                <div className="available-pet-tutor">
                    <span className='available-pet-label'>Responsável: <span>Fernanda Souza Coimbra Machado</span></span>

                </div>

                <div className="available-pet-status">
                    <span className='available-pet-label'>Interessados: <span>5</span></span>
                </div>
            </div>

        </div>
    )
}

export default PetCardDisponivel
