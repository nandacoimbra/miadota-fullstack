import React from 'react'
import './FiltraEspecies.css'
import { listaDeEspecies } from '../../assets/assets'

const FilterSpecies = ({ especie, setEspecie }) => {
    return (

        //componente para filtro de especie na home page
        //seleciona cães ou gatos na lista geral de pets para adoção
        <div className='filtra-especies-container' id='filtra-especies-container'>
            <h1>Pets disponíveis para adoção</h1>
            <p className='filtra-especies-text'>A adoção é um ato de amor que transforma a vida de animais abandonados e oferece a eles uma segunda chance de serem felizes em um novo lar. Navegue por nossa lista de pets disponíveis, conheça suas histórias e prepare-se para dar muito carinho a quem mais precisa.</p>
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
