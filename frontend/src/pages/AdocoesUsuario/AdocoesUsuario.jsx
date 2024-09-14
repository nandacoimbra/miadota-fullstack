import React from 'react'
import './AdocoesUsuario.css'
import MinhasAdocoesCard from '../../components/MinhasAdocoesCard/MinhasAdocoesCard'
import { Sidebar } from 'phosphor-react'
import UserSidebar from '../../components/UserSidebar/UserSidebar'

const AdocoesUsuario = () => {
    return (
        <div className='user-adoptions-page'>
            <UserSidebar />
            <div className="user-adoptions-page-content">
                <MinhasAdocoesCard />
            </div>
        </div>
    )
}

export default AdocoesUsuario
