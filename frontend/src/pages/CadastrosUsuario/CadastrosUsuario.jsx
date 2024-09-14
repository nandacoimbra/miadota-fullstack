import React from 'react'
import './CadastrosUsuario.css'
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import PetsAddPorMim from '../../components/PetsAddPorMim/PetsAddPorMim'

const CadastrosUsuario = () => {
    return (
        <div className='user-added-page'>
            <UserSidebar />
            <div className='user-added-page-content'>
                <PetsAddPorMim />
            </div>
        </div>
    )
}

export default CadastrosUsuario
