import React from 'react'
import './CadastroPet.css'

const CadastroPet = () => {
    return (
        <div className='add-pet-container'>
            <h2 className='add-pet-title'>Cadastro de Pet</h2>
            <form action="" className='add-pet-form'>
                <div className='add-pet-name'>
                    <label htmlFor="">Nome do pet:</label>
                    <input type="text" />
                </div>
                <div className='add-pet-sex'>
                    <label htmlFor="">Sexo:</label>
                    <select name="" id="">
                        <option value="">Fêmea</option>
                        <option value="">Macho</option>
                    </select>
                </div>
                <div className='add-pet-city-state'>
                    <div className='pet-city'>
                        <label htmlFor="">Cidade:</label>
                        <input type="text" />
                    </div>
                    <div className='pet-state'>
                        <label htmlFor="">Estado:</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='add-pet-description'>
                    <label htmlFor="">Descrição:</label>
                    <textarea name="" id="" cols={25} rows={5}>
                    </textarea>
                </div>
                <div className="add-pet-image">
                    <label htmlFor="">Adicionar imagem:</label>
                    <input type="file" required />
                </div>
                <button type='submit' className='add-pet-button'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CadastroPet
