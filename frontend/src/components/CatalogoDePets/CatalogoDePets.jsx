import React, { useContext } from 'react'
import './CatalogoDePets.css'
import { AppContext } from '../../context/AppContext'
import PetCardHome from '../PetCardHome/PetCardHome';

const CatalogoDePets = ({ especie }) => {

    const { petsParaAdocao,url } = useContext(AppContext);
    console.log(petsParaAdocao)

    return (
        <div className='catalogo-de-pets' id='catalogo-de-pets'>
            <div className="pets-para-adocao">
                {
                    petsParaAdocao.filter(pet=>pet.status===true).map((card) => {
                        if(especie==="todos" || especie===card.especie){
                            return <PetCardHome key={card._id} id={card._id} imagem={card.imagem} nome={card.nome} sexo={card.sexo} cidade={card.cidade} estado={card.estado} descricao={card.descricao} status={card.status} especie={card.especie} url={url}/>
                        }
                    })

                }
            </div>
        </div>
    )
}

export default CatalogoDePets
