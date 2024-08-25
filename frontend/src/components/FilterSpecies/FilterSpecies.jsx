import React from 'react'
import './FilterSpecies.css'
import { filter_species_list } from '../../assets/assets'

const FilterSpecies = () => {
    return (

        <div className='filter-species-container' id='filter-species-container'>
            <h1>Pets disponíveis para adoção</h1>
            <p className='filter-species-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis itaque dignissimos quod error adipisci eum, cupiditate ab quas voluptatum, sequi, repellat facilis temporibus excepturi veritatis quibusdam perferendis voluptas iure?</p>
            <div className="categories">
                {filter_species_list.map((species,index)=>{
                    return(
                        <div key = {index} className="category-item">
                            <img src={species.species_image} alt="" />
                            <p>{species.species_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FilterSpecies
