import React from 'react'
import './CriarConta.css'

const CriarConta = ({setLoginCadastro,onChangeHandler, data, onLogin}) => {
    return (
        <div className='create-account-container'>
            <h2 className='create-account-title'>Criar Conta</h2>
            <form onSubmit={onLogin} className='create-account-form'>
                <input type="text" placeholder='Nome completo' className='name' name='nome' onChange={onChangeHandler} value={data.nome} required/>
                <input type="text" placeholder='Telefone' className='tel' name='telefone' onChange={onChangeHandler} value={data.telefone} required/>
                <input type="email" placeholder='E-mail' className='email' name='email' onChange={onChangeHandler} value={data.email} required/>
                <input type="password" placeholder='Senha' className='password' name='senha' onChange={onChangeHandler} value={data.senha} required/>
                <button type="submit" className='create-account-button'>Entrar</button>
            </form>
            <button className='create-account' onClick={()=>{setLoginCadastro("login")}}>Já possui conta? Log In</button>
        </div>
    )
}

export default CriarConta
