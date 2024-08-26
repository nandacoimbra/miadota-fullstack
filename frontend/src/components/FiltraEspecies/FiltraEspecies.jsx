import React from 'react'
import './FiltraEspecies.css'
import { listaDeEspecies } from '../../assets/assets'

const FilterSpecies = () => {
    return (

        <div className='filtra-especies-container' id='filtra-especies-container'>
            <h1>Pets disponíveis para adoção</h1>
            <p className='filtra-especies-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis itaque dignissimos quod error adipisci eum, cupiditate ab quas voluptatum, sequi, repellat facilis temporibus excepturi veritatis quibusdam perferendis voluptas iure?</p>
            <div className="lista-especies">
                {listaDeEspecies.map((animal,index)=>{
                    return(
                        <div key = {index} className="especie">
                            <img src={animal.imagem} alt="" />
                            <p>{animal.especie}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FilterSpecies
