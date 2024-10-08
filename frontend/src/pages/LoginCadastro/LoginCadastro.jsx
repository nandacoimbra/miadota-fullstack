import React, { useContext, useState } from 'react'
import './LoginCadastro.css'
import Login from '../../components/Login/Login'
import CriarConta from '../../components/CriarConta/CriarConta'
import { AppContext } from '../../context/AppContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


const LoginCadastro = () => {

  const navigate = useNavigate();
  const { url, setToken } = useContext(AppContext);
  const [loginCadastro, setLoginCadastro] = useState("login");
  const [data, setData] = useState({
    nome: "",
    telefone:"",
    email: "",
    senha: ""
  })

  //busca os dados dos inputs e salva nas variáveis de estado
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let novaUrl = url;
    let navAddress = "";
    if (loginCadastro === "login") {
      novaUrl += "/user/login";
      navAddress += "/";
    }
    else {
      novaUrl += "/user/register";
      navAddress += "/user/data";
    }

    try {
      //chamada da api
      const response = await axios.post(novaUrl, data);

      //se for verdadeiro, o usuario conseguiu logar ou se registrar
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate(navAddress);

      }else{
        toast.error("Credenciais inválidas!")
      }

    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div className='login-cadastro'>

      {loginCadastro === "login"
        ? <Login setLoginCadastro={setLoginCadastro} onChangeHandler={onChangeHandler} data={data} onLogin={onLogin} />
        : <CriarConta setLoginCadastro={setLoginCadastro} onChangeHandler={onChangeHandler} data={data} onLogin={onLogin} />}
    </div>
  )
}

export default LoginCadastro
