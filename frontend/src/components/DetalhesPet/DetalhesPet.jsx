import React from 'react'
import { MapPinLine } from 'phosphor-react'
import { assets } from '../../assets/assets'
import './DetalhesPet.css'


const DetalhesPet = () => {
    return (
        <div className='pet-details-container'>
            <div className="pet-details-header-content">
                <div className="pet-details-header">
                    <h3>Detalhes do Animal</h3>
                </div>
                <div className="pet-details-content">
                    <p className='pet-details-description'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque itaque ipsum deserunt nulla consequuntur repellendus quam, hic explicabo ut in officiis, numquam doloribus cum voluptate commodi molestias illo placeat aperiam.
                    </p>
                    <ul className='pet-details-info'>
                        <li> <img src={assets.dna} alt="" /> Gato</li>
                        <li> <img src={assets.gender} alt="" /> Macho</li>
                        <li> <MapPinLine size={32}/> Cataguases-MG</li>
                        <li>Responsável: Fernanda</li>
                    </ul>
                </div>
                <button className='pet-details-adopt-button'>Tenho interesse</button>
            </div>
            <div className="pet-details-img-container">
                <img src={assets.nick} alt="" className="pet-details-img" />
            </div>

        </div>
    )
}

export default DetalhesPet
