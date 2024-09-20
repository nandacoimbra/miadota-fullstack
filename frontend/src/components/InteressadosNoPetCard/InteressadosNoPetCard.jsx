import React from 'react'
import './InteressadosNoPetCard.css'
import { WhatsappLogo, Envelope, ChatCenteredText } from 'phosphor-react'


const InteressadosNoPetCard = ({ usuario, pet, atualizaPet }) => {
  console.log(atualizaPet)
  return (
  <div className={'interested-card-body' + (pet.adotante===usuario._id?' adotante':'') + (pet.status==='ADOTADO' && pet.adotante===usuario._id?' finalizado':'')}>
      <div className="interested-card-header">
        <h4 className='interested-card-person-name'>{usuario.nome}</h4>
        <ul className="interested-card-contact-icons">
          <li><WhatsappLogo size={32} /></li>
          <li><Envelope size={32} /></li>
          <li><ChatCenteredText size={32} /></li>
        </ul>
      </div>
      <div className="interested-card-content">
        <span className='interested-card-item'>Local: <span>{usuario.cidade}-{usuario.estado}</span></span>
        <span className='interested-card-item'>Contato: <span>{usuario.telefone}</span></span>

        <div className="adoption-status-buttons">
          {
            pet.status === 'APROVADO' &&
            <button className='' onClick={() => {
              (atualizaPet({ status: 'EM_ADOCAO', adotante: usuario._id }))
            }}>Iniciar adoção</button>
          }

          {
            pet.status === 'EM_ADOCAO' && pet.adotante == usuario._id &&
            <>
              <button className='' onClick={() => { atualizaPet({ status: 'APROVADO', adotante: null }) }}>Cancelar adoção</button>
              <button className='' onClick={() => { atualizaPet({ status: 'ADOTADO', adotante: usuario._id }) }}>Finalizar adoção</button>
            </>
          }

          {
            pet.status === 'ADOTADO' && pet.adotante == usuario._id &&
           <span className='indicador-adotante'>Adotante</span>
          }


        </div>
      </div>
    </div>
  )
}

export default InteressadosNoPetCard
