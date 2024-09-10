import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import ListaPets from './pages/ListaPets/ListaPets'
import NovosCadastros from './pages/NovosCadastros/NovosCadastros'

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/list" element={<ListaPets/>}/>
          <Route path="/requests" element={<NovosCadastros/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
