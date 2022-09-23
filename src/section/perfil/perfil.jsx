// import fotoPerfil from '../../assets/fotoPerfil.jfif'
import fotoPerfil from '../../assets/perfil.jpg'
import logoInsta from '../../assets/logoInsta.jpg'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoGithub from '../../assets/logoGithub.png'

import './perfil.scss'

export default function Perfil() {

  return (
    <div className='containerPerfil'>
      <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'> <img src={logoInsta} alt='Logo do Instagram' className='logo' /> </a>
      <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'> <img src={logoLinkedin} alt='Logo do Instagram' style={{ height: '5vw' }} className='logo' /> </a>
      <img src={fotoPerfil} alt='Foto Perfil' className='fotoPerfil' />
      <a href='https://github.com/Mickael-Luiz' target='_blank' rel='noopener noreferrer'> <img src={logoGithub} alt='Logo do Instagram' className='logo' /></a>
      <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'> <img src={logoInsta} alt='Logo do Instagram' className='logo' /></a>
    </div >
  )
}
