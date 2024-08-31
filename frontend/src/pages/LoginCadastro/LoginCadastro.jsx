import React from 'react'
import './LoginCadastro.css'
import Login from '../../components/Login/Login'
import CriarConta from '../../components/CriarConta/CriarConta'

const LoginCadastro = () => {
  return (
    <div className='login-cadastro'>

        <Login/>
        <CriarConta/>
      
    </div>
  )
}

export default LoginCadastro
