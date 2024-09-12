import React, { useState } from 'react'
import './PetCardAprovacao.css'
import { assets } from '../../../../frontend/src/assets/assets';
import { CaretDown, CaretUp, Trash } from "phosphor-react"


const PetCardAprovacao = () => {

    const [cardExpandido, setCardExpandido] = useState(false);

    const alteraExpansao = () => {
        setCardExpandido(!cardExpandido);
    }

    return (
        <div className={`new-pet ${cardExpandido ? 'expanded' : ''}`}>
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
                < div className={`new-pet-local-description ${cardExpandido ? '' : 'new-pet-short'}`}>
                    <div className="new-pet-local">
                        <span className='new-pet-label'>Local: <span>Cataguases-MG</span></span>

                    </div>
                    <div className="new-pet-description">
                        <span className='new-pet-label'>Descrição: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci ea nam, amet maxime, consequuntur quisquam quidem odio ipsam illo ratione alias optio, asperiores officia. Cumque vitae nobis natus expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cum quaerat dignissimos suscipit tenetur doloribus perferendis necessitatibus fuga, molestias consequatur nostrum ut natus magnam. Magni sunt vero fugiat iure aperiam.</span></span>

                    </div>
                </div>

                <div className="new-pet-status">
                    <span className='new-pet-label'>Status:</span>
                    <div className="status-radio-buttons">
                        <div className="status-approved">
                            <input type='radio' name='new-pet-status' value={true} />
                            <label>Aprovado</label>
                        </div>
                        <div className="status-failed">
                            <input type='radio' name='new-pet-status' value={false} />
                            <label>Reprovado</label>
                        </div>
                    </div>
                </div>
                <div className="new-pet-see-more">
                    {cardExpandido ? <CaretUp size={32} onClick={alteraExpansao} className='eye-icon' /> :
                        <CaretDown size={32} onClick={alteraExpansao} className='eye-icon' />
                    }
                    <Trash size={32} className='trash-icon' />
                </div>
            </div>

        </div>
    )
}

export default PetCardAprovacao

