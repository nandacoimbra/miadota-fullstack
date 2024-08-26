import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import FiltraEspecies from '../../components/FiltraEspecies/FiltraEspecies'

const Home = () => {
  return (
    <div className='home-page'>
      <Header />
      <div className="home-page-content">
        <FiltraEspecies/>
      </div>
    </div>
  )
}

export default Home
