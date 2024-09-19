import React from 'react'
import { assets } from '../../../../frontend/src/assets/assets'
import "./PetCardAdotado.css"


const PetCardAdotado = ({pet,imagem}) => {
    return (
        <div className="adopted-pet">
            <div className="adopted-pet-img-container" >
                <img src={imagem} alt="" />
            </div>
            <div className="adopted-pet-data">
                <h5>Nick</h5>
                <div className="adopted-pet-specie">
                    <span className='adopted-pet-label'>Espécie: <span>{pet.especie}</span></span>

                </div>
                <div className="adopted-pet-tutor">
                    <span className='adopted-pet-label'>Responsável: <span>Fernanda Souza Coimbra Machado</span></span>

                </div>

                <div className="adopted-by">
                    <span className='adopted-pet-label'>Adotante: <span>Pierre Alvim de Paula</span></span>
                </div>
            </div>
        </div>
    )
}

export default PetCardAdotado
