import React from 'react'
import { assets } from '../../../../frontend/src/assets/assets'

const PetCardDisponivel = () => {
    return (
        <div className="new-pet">
            <div className="new-pet-img-container" >
                <img src={assets.nick} alt="" />
            </div>
            <div className="new-pet-data">
                <h5>Nick</h5>
                <div className="new-pet-specie">
                    <span className='new-pet-label'>Espécie: <span>Gato</span></span>

                </div>
                <div className="new-pet-tutor">
                    <span className='new-pet-label'>Responsável: <span>Fernanda Souza Coimbra Machado</span></span>

                </div>

                <div className="available-pet-status">
                    <span className='new-pet-label'>Interessados: <span>5</span></span>
                </div>
            </div>

        </div>
    )
}

export default PetCardDisponivel
