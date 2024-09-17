import React, { useState } from 'react'
import './DadosUsuario.css'

const DadosUsuario = ({usuario}) => {

    const [name, setName] = useState("Fernanda Souza Coimbra Machado");
    return (
        <div className='user-data'>
            <h3 className=''>Meus dados</h3>
            <form action="" className='user-data-form'>
                <div className="user-name">
                    <label htmlFor="">Nome Completo:</label>
                    <input type="text" name="" id="" placeholder={usuario.nome} />
                </div>
                <div className="user-email">
                    <label htmlFor="">E-mail:</label>
                    <input type="email" name="" id="" placeholder={usuario.email}/>
                </div>
                <div className="user-phone">
                    <label htmlFor="">Telefone:</label>
                    <input type="tel" name="" id="" placeholder={usuario.telefone}/>
                </div>
                <div className="user-city-state">
                    <div className="user-city">
                        <label htmlFor="">Cidade:</label>
                        <input type="text" name="" id="" placeholder={usuario.cidade}/>
                    </div>
                    <div className="user-state">
                        <label htmlFor="">Estado:</label>
                        <input type="text" name="" id="" placeholder={usuario.estado}/>
                    </div>
                </div>
                {/* <div className="user-address">
                    <div className="user-street">
                        <label htmlFor="">Rua:</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="user-house-number">
                        <label htmlFor="">Número:</label>
                        <input type="number" name="" id="" />
                    </div>
                </div> */}
                <button className='edit-user-data-button'>Editar Dados</button>
            </form>
        </div>
    )
}

export default DadosUsuario
