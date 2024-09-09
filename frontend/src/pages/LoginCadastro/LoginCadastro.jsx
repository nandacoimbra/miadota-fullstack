import React, { useState } from 'react'
import './LoginCadastro.css'
import Login from '../../components/Login/Login'
import CriarConta from '../../components/CriarConta/CriarConta'

const LoginCadastro = () => {

  const [loginCadastro, setLoginCadastro] = useState("login");
  return (
    <div className='login-cadastro'>

      {loginCadastro==="login"
      ?  <Login setLoginCadastro={setLoginCadastro}/>
      : <CriarConta setLoginCadastro={setLoginCadastro}/>}
    </div>
  )
}

export default LoginCadastro
