import React from 'react'
import { assets } from '../../../../frontend/src/assets/assets'
import './PetCardDisponivel.css'

const PetCardDisponivel = () => {
    return (
        <div className="available-pet">
            <div className="available-pet-img-container" >
                <img src={assets.nick} alt="" className="available-pet-img"/>
            </div>
            <div className="available-pet-data">
                <h5>Nick</h5>
                <div className="available-pet-specie">
                    <span className='available-pet-label'>Espécie: <span>Gato</span></span>

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
