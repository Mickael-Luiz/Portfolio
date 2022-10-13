import { useState } from 'react'

import fotoPerfil from '../../assets/perfil.jpg'
import fotoPerfilCinza from '../../assets/perfilCinza.jpg'
import logoInsta from '../../assets/logoInsta.jpg'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoGithub from '../../assets/logoGithub.png'

import './perfil.scss'

export default function Perfil() {

  const [filtro, setFiltro] = useState(false)

  return (
    <div className='containerPerfil'>

      <div className='card' >
        <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
          <img src={logoInsta} alt='Logo do Instagram' className='logo' />
        </a>
      </div>

      <div className='card' >
        <a href='https://www.linkedin.com/in/mickael-dias-787799169/' target='_blank' rel='noopener noreferrer'>
          <img src={logoLinkedin} alt='Logo do Instagram' className='logo' />
        </a>
      </div>

      <img
        src={filtro ? fotoPerfil : fotoPerfilCinza}
        onMouseOver={() => setFiltro(!filtro)}
        onMouseOut={() => setFiltro(!filtro)}
        alt='Foto Perfil' className='fotoPerfil' />

      <div className='card' >
        <a href='https://github.com/Mickael-Luiz' target='_blank' rel='noopener noreferrer'>
          <img src={logoGithub} alt='Logo do Instagram' className='logo' />
        </a>
      </div>

      <div className='card' >
        <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
          <img src={logoInsta} alt='Logo do Instagram' className='logo' />
        </a>
      </div>

    </div >
  )
}
