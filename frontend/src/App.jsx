import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginCadastro from './pages/LoginCadastro/LoginCadastro'
import CadastroPet from './components/CadastroPet/CadastroPet'
import User from './pages/User/User'
import DetalhesAnimal from './pages/DetalhesAnimal/DetalhesAnimal'

const App = () => {
  return (
    <>

      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginCadastro />} />
          <Route path='/cadastro-pet' element={<CadastroPet/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/detalhes/:id' element={<DetalhesAnimal/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
