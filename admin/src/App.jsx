import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import ListaPets from './pages/ListaPets/ListaPets'
import NovosCadastros from './pages/NovosCadastros/NovosCadastros'
import './App.css'
import Adotados from './pages/Adotados/Adotados'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="admin-content">
          <Routes>
            <Route path="/list" element={<ListaPets />} />
            <Route path="/requests" element={<NovosCadastros />} />
            <Route path="/adopted" element={<Adotados />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
