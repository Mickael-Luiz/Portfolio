import imgSobreMim from '../../assets/sobreMim.png'
import imgCertificado from '../../assets/certificados.png'
import imgPortfolio from '../../assets/portfolio.png'

import './index.scss'

export default function Body() {
  return (
    <div className="containerBody">


      {/* Paragrafo sobre mim*/}
      <div className='sobreMim'>
        <img src={imgSobreMim} alt='Imagem Sobre Mim' className='imgConteudo imgSobreMim' />
        <div className='conteudo'>
          <p className='paragrafo'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button>MAIS INFORMAÇÕES</button>
        </div>
        <div className='effects' >
          <div className="lineEffect"></div>
        </div>
      </div>


      {/* Paragrafo Cursos */}
      <div className='cursos'>
        <img src={imgCertificado} alt='imagemCertificado' className='imgConteudo imgCertificados' />
        <div className='conteudo'>
          <p className='paragrafo'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button>CERTIFICADOS</button>
        </div>
      </div>

      {/* Paragrafo portfolio*/}
      <div className='estudos'>
        <img src={imgPortfolio} alt='Imagem Portfolio' className='imgConteudo imgPortfolio' />
        <div className='conteudo'>
          <p className='paragrafo'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button>Visualizar</button>
        </div>
      </div>
    </div>
  )
}
