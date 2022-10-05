import React from 'react'
import { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import Accordions from '../../components/accondions'

import pdfFile from '../../assets/Curriculo.pdf'
import imgSobreMim from '../../assets/sobreMim.png'
import imgCertificado from '../../assets/certificados.png'
import imgPortfolio from '../../assets/portfolio.png'

import './index.scss'

export default function Body() {

  const [showCurriculo, setShowCurriculo] = useState(false)
  const [showCertificados, setShowCertificados] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null);

  const dialogShow = {
    'dialogCurriculo': setShowCurriculo,
    'dialogCertificados': setShowCertificados,
    'dialogPortfolio': setShowPortfolio
  }

  const onClick = (name) => {
    dialogShow [name] (true)
  }

  const onHide = (name) => {
    dialogShow [name] (false)
  }

  return (
    <div className="containerBody">


      {/* Paragrafo sobre mim*/}
      <div className='containerConteudo sobreMim'>
        <img src={imgSobreMim} alt='Imagem Sobre Mim' className='imgConteudo imgSobreMim' />
        <div className='conteudo'>
          <p className='paragrafo'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button onClick={() => onClick('dialogCurriculo')}>Currículo</button>
        </div>
        <div className='effects' >
          <div className="lineEffect" ></div>
        </div>
      </div>
      <Dialog className='dialog' header="Currículo" visible={showCurriculo} style={{ width: '50vw' }} onHide={() => onHide('dialogCurriculo')} blockScroll>
          <embed style={{width:'100%', height:"500px"}} src={pdfFile}></embed>
      </Dialog>


      {/* Paragrafo Cursos */}
      <div className='containerConteudo cursos'>
        <img src={imgCertificado} alt='imagemCertificado' className='imgConteudo imgCertificados' />
        <div className='conteudo'>
          <p className='paragrafo'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button onClick={() => onClick('dialogCertificados')}>Certificados</button>
        </div>
      </div>
      <Dialog className='dialog' header="Certificados" visible={showCertificados} style={{ width: '50vw' }} onHide={() => onHide('dialogCertificados')} blockScroll>
        <Accordions activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </Dialog>

      {/* Paragrafo portfolio*/}
      <div className='containerConteudo estudos'>
        <img src={imgPortfolio} alt='Imagem Portfolio' className='imgConteudo imgPortfolio' />
        <div className='conteudo'>
          <p className='paragrafo'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button onClick={() => onClick('dialogPortfolio')}>Visualizar</button>
        </div>
      </div>
      <Dialog header="Portfolio" visible={showPortfolio} style={{ width: '50vw' }} onHide={() => onHide('dialogPortfolio')} blockScroll>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
      </Dialog>
    </div>
  )
}
