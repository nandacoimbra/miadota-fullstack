import React from 'react'
import './FiltraEspecies.css'
import { listaDeEspecies } from '../../assets/assets'

const FilterSpecies = ({ especie, setEspecie }) => {
    return (

        //componente para filtro de especie na home page
        //seleciona cães ou gatos na lista geral de pets para adoção
        <div className='filtra-especies-container' id='filtra-especies-container'>
            <h1>Pets disponíveis para adoção</h1>
            <p className='filtra-especies-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis itaque dignissimos quod error adipisci eum, cupiditate ab quas voluptatum, sequi, repellat facilis temporibus excepturi veritatis quibusdam perferendis voluptas iure?</p>
            <div className="lista-especies">
                {listaDeEspecies.map((animal) => {
                    return (
                        <div onClick={() => setEspecie(prev => prev === animal.especie ? "" : animal.especie)} key={animal.id} className="especie">
                            <img className={especie === animal.especie ? "active" : ""} src={animal.imagem} alt="" />
                            {
                                animal.especie === "gato" ? <p>Gatos</p>
                                    : <p>Cães</p>
                            }

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FilterSpecies
