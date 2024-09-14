import React from 'react'
import './NovoPetUsuario.css'
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import CadastroPet from '../../components/CadastroPet/CadastroPet'


const NovoPetUsuario = () => {
    return (
        <div className='user-new-pet-page'>
            <UserSidebar />
            <div className='user-new-pet-page-content'>
                <CadastroPet/>
            </div>
        </div>
    )
}

export default NovoPetUsuario
