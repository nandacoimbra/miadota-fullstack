import React, { useState } from 'react'
import './Login.css'

const Login = ({ setLoginCadastro, onChangeHandler, data, onLogin }) => {

  return (
    <div className='login'>
      <h2 className='login-title'>Log In</h2>
      <form onSubmit={onLogin} className='login-form'>
        <input type="email" placeholder='E-mail' className='login-email' name='email' onChange={onChangeHandler} value={data.email} required />
        <input type="password" placeholder='Senha' className='login-password' name='senha' onChange={onChangeHandler} value={data.senha} required />
        <a className='forgot-password' href=''>Esqueci minha senha</a>
        <button type="submit" className='login-button'>Entrar</button>
      </form>
      <button className='create-account' onClick={() => { setLoginCadastro("cadastro") }}>Criar conta</button>
    </div>
  )
}

export default Login
