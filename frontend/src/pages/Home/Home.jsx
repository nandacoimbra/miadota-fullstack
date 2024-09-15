import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import FiltraEspecies from '../../components/FiltraEspecies/FiltraEspecies'
import CatalogoDePets from '../../components/CatalogoDePets/CatalogoDePets'

const Home = () => {

  const [especie, setEspecie] = useState("");
  return (
    <div className='home-page'>
      <Header />
      <div className="home-page-content">
        <FiltraEspecies especie={especie} setEspecie={setEspecie}/>
        <CatalogoDePets especie={especie}/>
      </div>
    </div>
  )
}

export default Home
