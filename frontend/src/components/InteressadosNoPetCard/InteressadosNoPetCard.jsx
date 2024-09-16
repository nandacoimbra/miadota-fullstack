import React from 'react'
import './InteressadosNoPetCard.css'
import { WhatsappLogo,Envelope,ChatCenteredText } from 'phosphor-react'

const InteressadosNoPetCard = ({usuario}) => {
  console.log(usuario)
  return (
    <div className='interested-card-body'>
      <div className="interested-card-header">
        <h4 className='interested-card-person-name'>{usuario.nome}</h4>
        <ul className="interested-card-contact-icons">
            <li><WhatsappLogo size={32} /></li>
            <li><Envelope size={32} /></li>
            <li><ChatCenteredText size={32} /></li>
        </ul>
      </div>
      <div className="interested-card-content">
        <span className='interested-card-item'>Data de solicitação: <span>01/08/24</span></span>
        <span className='interested-card-item'>Local: <span>{usuario.cidade}-{usuario.estado}</span></span>
        <span className='interested-card-item'>Contato: <span>{usuario.telefone}</span></span>
        <span className='interested-card-item'>Status do pedido de adoção: <span>em análise</span></span>
        <div className="adoption-status-buttons">
            <button className='interested-button-accept'>Aceitar</button>
            <button className='interested-button-reject'>Recusar</button>
        </div>
      </div>
    </div>
  )
}

export default InteressadosNoPetCard
