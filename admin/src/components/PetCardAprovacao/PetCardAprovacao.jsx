import React, { useState } from 'react'
import './PetCardAprovacao.css'
import { CaretDown, CaretUp, Trash } from "phosphor-react"



const PetCardAprovacao = ({imagem,alteraStatus,pet}) => {

    const [cardExpandido, setCardExpandido] = useState(false);

    const alteraExpansao = () => {
        setCardExpandido(!cardExpandido);
        console.log(cardExpandido);
    }

    const handleAprovar = () => {
        alteraStatus(pet._id, 'APROVADO'); // Atualiza o status para APROVADO
        
      };
    const handleReprovar = () => {
        alteraStatus(pet._id, 'REPROVADO'); // Atualiza o status para REPROVADO
        
      };

    return (
        <div className={`new-pet ${cardExpandido ? 'expanded' : ''}`}>
            <div className="new-pet-img-container" >
                <img src={imagem} alt="" />
            </div>
            <div className="new-pet-data">
                <div className="new-pet-name-icons">
                    <h5>{pet.nome}</h5>
                    <div className="new-pet-see-more">
                        {cardExpandido ? <CaretUp size={32} onClick={alteraExpansao} className='arrow-icon' /> :
                            <CaretDown size={32} onClick={alteraExpansao} className='arrow-icon' />
                        }
                        <Trash size={32} className='trash-icon' />
                    </div>
                </div>
                <hr />
                <div className="new-pet-specie">
                    <span className='new-pet-label'>Espécie: <span>{pet.especie}</span></span>

                </div>
                <div className="new-pet-tutor">
                    <span className='new-pet-label'>Responsável: <span>{pet.responsavel.nome}</span></span>

                </div>
                < div className={`new-pet-local-description ${cardExpandido ? '' : 'new-pet-short'}`}>
                    <div className="new-pet-local">
                        <span className='new-pet-label'>Local: <span>{pet.cidade}-{pet.estado}</span></span>

                    </div>
                    <div className="new-pet-description">
                        <span className='new-pet-label'>Descrição: <span>{pet.descricao}</span></span>

                    </div>
                </div>

                <div className="new-pet-status">
                    <button className='approve-button' onClick={handleAprovar}>Aprovar</button>
                    <button className='disapprove-button'onClick={handleReprovar}>Reprovar</button>
                </div>
            </div>

        </div>


    )
}

export default PetCardAprovacao

