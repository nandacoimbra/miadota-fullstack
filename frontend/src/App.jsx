import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginCadastro from './pages/LoginCadastro/LoginCadastro'
import CadastroPet from './components/CadastroPet/CadastroPet'
import User from './pages/User/User'
import DetalhesAnimal from './pages/DetalhesAnimal/DetalhesAnimal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageDadosUsuario from './pages/PageDadosUsuario/PageDadosUsuario'
import AdocoesUsuario from './pages/AdocoesUsuario/AdocoesUsuario'
import CadastrosUsuario from './pages/CadastrosUsuario/CadastrosUsuario'
import NovoPetUsuario from './pages/NovoPetUsuario/NovoPetUsuario'
import InteressadosNoPet from './pages/InteressadosNoPet/InteressadosNoPet'

const App = () => {
  return (
    <>

      <div className='app'>
        <ToastContainer theme='colored' />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginCadastro />} />
          <Route path='/cadastro-pet' element={<CadastroPet />} />
          {/* <Route path='/user' element={<User />} /> */}
          <Route path='/user/data' element={<PageDadosUsuario/>} />
          <Route path='/user/adoptions' element={<AdocoesUsuario/>} />
          <Route path='/user/mypets' element={<CadastrosUsuario/>} />
          <Route path='/user/newpet' element={<NovoPetUsuario/>} />
          <Route path='/detalhes/:id' element={<DetalhesAnimal />} />
          <Route path='/user/mypets/interested/:id' element={<InteressadosNoPet />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
