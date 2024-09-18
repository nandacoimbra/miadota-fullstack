import React from 'react'
import './PetsAddPorMim.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const PetsAddPorMim = ({pet,url}) => {

    const manipulaIdDoPet = () => {
        // Navega para a rota que lista os interessados, passando o ID do pet na URL
        navigate(`/user/mypets/interested/${pet._id}`);
        console.log(pet._id)
    }

    const navigate = useNavigate();
  return (
    <div className='my-pet-card'>
       <div className="my-pet-img-container">
                <img src={url + "/images/" + pet.imagem} alt="" />
            </div>
            <div className="my-pet-data">
                <h5>{pet.nome}</h5>
                <div className="my-pet-specie">
                    <span className='my-pet-label'>Espécie: <span>{pet.especie}</span></span>

                </div>
                {/* <div className="my-pet-date">
                    <span className='my-pet-label'>Data de Cadastro: <span>13/08/2024</span></span>

                </div> */}
                <div className="my-pet-local">
                    <span className='my-pet-label'>Local: <span>{pet.cidade}-{pet.estado}</span></span>

                </div>
                {/* <div className="my-pet-interested-list">
                    <span className='my-pet-label'>Pessoas interessadas: <span className='interested-list'>5</span></span>
                </div> */}
                <div className="">
                    <span>{pet.status && 'Aprovado'}</span>
                </div>
                <button className='list-interested-people' onClick={manipulaIdDoPet}>Listar interessados</button>
            </div>
    </div>
  )
}

export default PetsAddPorMim
