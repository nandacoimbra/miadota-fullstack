import React from 'react'
import "./PageDadosUsuario.css"
import UserSidebar from '../../components/UserSidebar/UserSidebar'
import DadosUsuario from '../../components/DadosUsuario/DadosUsuario'

const PageDadosUsuario = () => {
    return (
        <div className='user-data-page'>
            <UserSidebar />
            <div className="user-data-content">
                <DadosUsuario />
            </div>
        </div>
    )
}

export default PageDadosUsuario
