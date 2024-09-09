import React from 'react'
import './CriarConta.css'

const CriarConta = ({setLoginCadastro}) => {
    return (
        <div className='create-account-container'>
            <h2 className='create-account-title'>Criar Conta</h2>
            <form action="" className='create-account-form'>
                <input type="text" placeholder='Nome completo' className='name' name='userName' required/>
                <input type="email" placeholder='E-mail' className='email' name='userEmail' required/>
                <input type="password" placeholder='Senha' className='password' name='userPassword' required/>
                <button type="submit" className='create-account-button'>Entrar</button>
            </form>
            <button className='create-account' onClick={()=>{setLoginCadastro("login")}}>Já possui conta? Log In</button>
        </div>
    )
}

export default CriarConta
