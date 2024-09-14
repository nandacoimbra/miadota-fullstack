import React, { useState } from 'react'
import './PetCardAprovacao.css'
import { assets } from '../../../../frontend/src/assets/assets';
import { CaretDown, CaretUp, Trash } from "phosphor-react"


const PetCardAprovacao = ({ nome, imagem, especie, cidade, estado, descricao, status, responsavel }) => {

    const [cardExpandido, setCardExpandido] = useState(false);

    const alteraExpansao = () => {
        setCardExpandido(!cardExpandido);
        console.log(cardExpandido);
    }

    return (
        <div className={`new-pet ${cardExpandido ? 'expanded' : ''}`}>
            <div className="new-pet-img-container" >
                <img src={imagem} alt="" />
            </div>
            <div className="new-pet-data">
                <div className="new-pet-name-icons">
                    <h5>{nome}</h5>
                    <div className="new-pet-see-more">
                        {cardExpandido ? <CaretUp size={32} onClick={alteraExpansao} className='arrow-icon' /> :
                            <CaretDown size={32} onClick={alteraExpansao} className='arrow-icon' />
                        }
                        <Trash size={32} className='trash-icon' />
                    </div>
                </div>
                <hr />
                <div className="new-pet-specie">
                    <span className='new-pet-label'>Espécie: <span>{especie}</span></span>

                </div>
                <div className="new-pet-tutor">
                    <span className='new-pet-label'>Responsável: <span>{responsavel}</span></span>

                </div>
                < div className={`new-pet-local-description ${cardExpandido ? '' : 'new-pet-short'}`}>
                    <div className="new-pet-local">
                        <span className='new-pet-label'>Local: <span>{cidade}-{estado}</span></span>

                    </div>
                    <div className="new-pet-description">
                        <span className='new-pet-label'>Descrição: <span>{descricao}</span></span>

                    </div>
                </div>

                <div className="new-pet-status">
                    <button className='approve-button'>Aprovar</button>
                    <button className='disapprove-button'>Reprovar</button>
                </div>
            </div>

        </div>


    )
}

export default PetCardAprovacao

