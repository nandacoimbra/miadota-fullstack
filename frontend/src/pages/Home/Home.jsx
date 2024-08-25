import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import FilterSpecies from '../../components/FilterSpecies/FilterSpecies'

const Home = () => {
  return (
    <div className='home-page'>
      <Header />
      <div className="home-page-content">
        <FilterSpecies/>
      </div>
    </div>
  )
}

export default Home
