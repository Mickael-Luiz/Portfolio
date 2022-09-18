import fotoPerfil from '../../assets/perfil.jpg'
import logoInsta from '../../assets/logoInsta.jpg'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoGithub from '../../assets/logoGithub.png'

import './perfil.scss'

export default function Perfil() {
  return (
    <div className='containerPerfil'>
      <img src={logoInsta} alt='Logo do Instagram' className='logos' />
      <img src={logoLinkedin} alt='Logo do Instagram' style={{maxHeight: '75px'}} className='logos' />
      <img src={fotoPerfil} alt='Foto Perfil' className='fotoPerfil' />
      <img src={logoGithub} alt='Logo do Instagram' style={{maxHeight: '60px'}} className='logos' />
      <img src={logoInsta} alt='Logo do Instagram' className='logos' />
    </div>
  )
}
