import React from 'react'
import './PetsAddPorMim.css'
import { assets } from '../../assets/assets'

const PetsAddPorMim = () => {
  return (
    <div className='my-pet-card'>
       <div className="my-pet-img-container">
                <img src={assets.nick} alt="" />
            </div>
            <div className="my-pet-data">
                <h5>Nick</h5>
                <div className="my-pet-specie">
                    <span className='my-pet-label'>Espécie: <span>Gato</span></span>

                </div>
                <div className="my-pet-date">
                    <span className='my-pet-label'>Data de Cadastro: <span>13/08/2024</span></span>

                </div>
                <div className="my-pet-local">
                    <span className='my-pet-label'>Local: <span>Cataguases-MG</span></span>

                </div>
                <div className="my-pet-interested-list">
                    <span className='my-pet-label'>Pessoas interessadas: <span className='interested-list'>5</span></span>
                </div>
                <button className='list-interested-people'>Listar interessados</button>
            </div>
    </div>
  )
}

export default PetsAddPorMim
