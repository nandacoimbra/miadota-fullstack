import React from 'react'
import './MinhasAdocoesCard.css'
import { assets } from '../../assets/assets'

const MinhasAdocoesCard = ({pet,url}) => {


    return (
        <div className='user-wanted-pet'>
            <div className="user-pet-img-container">
                <img src={url + "/images/" + pet.imagem} alt="" />
            </div>
            <div className="user-pet-data">
                <h5>{pet.nome}</h5>
                <div className="user-pet-specie">
                    <span className='user-pet-label'>Espécie: <span>{pet.especie}</span></span>

                </div>
                <div className="user-pet-tutor">
                    <span className='user-pet-label'>Responsável: <span>{pet.responsavel}</span></span>

                </div>
                <div className="user-pet-local">
                    <span className='user-pet-label'>Local: <span>{pet.cidade}-{pet.estado}</span></span>

                </div>
                <div className="user-pet-adoption-status">
                    <span className='user-pet-label'>Status da adoção:</span>
                    {
                        pet.adotado===false?<span className='adoption-status'>Em análise</span>
                        :<span className='adoption-status'>Adotado</span>
                    }
                    
                </div>
            </div>

        </div>
    )
}

export default MinhasAdocoesCard
