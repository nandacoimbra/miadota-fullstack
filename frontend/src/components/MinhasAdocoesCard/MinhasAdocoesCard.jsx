import React from 'react'
import './MinhasAdocoesCard.css'
import { assets } from '../../assets/assets'

const MinhasAdocoesCard = () => {


    return (
        <div className='user-wanted-pet'>
            <div className="user-pet-img-container">
                <img src={assets.nick} alt="" />
            </div>
            <div className="user-pet-data">
                <h5>Nick</h5>
                <div className="user-pet-specie">
                    <span className='user-pet-label'>Espécie: <span>Gato</span></span>

                </div>
                <div className="user-pet-tutor">
                    <span className='user-pet-label'>Responsável: <span>Fernanda Souza Coimbra Machado</span></span>

                </div>
                <div className="user-pet-local">
                    <span className='user-pet-label'>Local: <span>Cataguases-MG</span></span>

                </div>
                <div className="user-pet-adoption-status">
                    <span className='user-pet-label'>Status da adoção:</span>
                    <span className='adoption-status'>Em análise</span>
                </div>
            </div>

        </div>
    )
}

export default MinhasAdocoesCard
