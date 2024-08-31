import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginCadastro from './pages/LoginCadastro/LoginCadastro'
import CadastroPet from './components/CadastroPet/CadastroPet'

const App = () => {
  return (
    <>

      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginCadastro />} />
          <Route path='/cadastro-pet' element={<CadastroPet/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
