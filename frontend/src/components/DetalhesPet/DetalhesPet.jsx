import React from 'react'
import { MapPinLine } from 'phosphor-react'
import { assets } from '../../assets/assets'
import './DetalhesPet.css'


const DetalhesPet = ({pet, url, manifestarInteresse }) => {
    const {_id, imagem, nome, sexo, cidade, estado, descricao, especie } = pet;
    return (
        <div className="pet-details">
            <div className='pet-details-container'>
                <div className="pet-details-header-content">
                    <div className="pet-details-header">
                        <h3>Detalhes do Animal</h3>
                        <h5>{nome}</h5>
                    </div>
                    <div className="pet-details-content">
                        <p className='pet-details-description'>
                            {descricao}
                        </p>
                        <ul className='pet-details-info'>
                            <li> <img src={assets.dna} alt="" /> {especie}</li>
                            <li> <img src={assets.gender} alt="" /> {sexo}</li>
                            <li> <MapPinLine size={32} /> {cidade}-{estado}</li>
                        </ul>
                    </div>
                    {
                    manifestarInteresse &&
                    <button className='pet-details-adopt-button' onClick={() => manifestarInteresse(_id)}>Tenho interesse</button>
                    }
                </div>

            </div>
            <div className="pet-details-img-container">
                <img src={url + "/images/" + imagem} alt="" className="pet-details-img" />
            </div>
        </div>

    )
}


export default DetalhesPet
