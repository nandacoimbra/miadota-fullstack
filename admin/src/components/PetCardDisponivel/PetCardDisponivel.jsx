import React from 'react'
import './PetCardDisponivel.css'

const PetCardDisponivel = ({ imagem, pet }) => {
    const { nome, especie, responsavel, status } = pet;
    return (
        <div className="available-pet">
            <div className="available-pet-img-container" >
                <img src={imagem} alt="" className="available-pet-img" />
            </div>
            <div className="available-pet-data">
                <h5>{nome}</h5>
                <div className="available-pet-specie">
                    <span className='available-pet-label'>Espécie: <span>{especie}</span></span>

                </div>
                <div className="available-pet-tutor">
                    <span className='available-pet-label'>Responsável: <span>{responsavel.nome}</span></span>

                </div>

                <div className="available-pet-status">
                    <span className='available-pet-label'>Status:
                        {status === 'APROVADO' ? <span> Aprovado</span> :
                            status === 'EM_ADOCAO' ?
                                <span> Em adoção</span> :
                                <></>
                        }
                    </span>
                </div>
            </div>

        </div>
    )
}

export default PetCardDisponivel
