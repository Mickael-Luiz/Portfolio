import CardCurriculo from './cardCurriculo'
import './index.scss'

export default function Main() {
    return (
        <div className="main">
            <div className="cardCurriculo">
                <CardCurriculo />
                <div className='textoIlustrativo'>
                    Em breve pensarei em algo para colocar aqui
                </div>
            </div>
            <div className="cardCursos" onClick="abrirModalCursos">
                <h2>Cursos</h2>
                <div className='textoIlustrativo'>
                    Em breve pensarei em algo para colocar aqui
                </div>
            </div>
            <div className="cardRedes">
                <h2>Projetos</h2>
                <div className='textoIlustrativo'>
                    Em breve pensarei em algo para colocar aqui
                </div>
            </div>
        </div>
    )

    
}