import React from 'react'
import './CriarConta.css'

const CriarConta = () => {
    return (
        <div className='create-account-container'>
            <h2 className='create-account-title'>Criar Conta</h2>
            <form action="" className='create-account-form'>
                <input type="text" placeholder='Nome completo' className='name' required/>
                <input type="email" placeholder='E-mail' className='email' required/>
                <input type="password" placeholder='Senha' className='password' required/>
                <button type="submit" className='create-account-button'>Entrar</button>
            </form>
            <a href="" className='create-account'>Já possui conta? Log In</a>
        </div>
    )
}

export default CriarConta
