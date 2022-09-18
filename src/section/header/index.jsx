import fundoHeader from '../../assets/fundo-header.jpg'
import iconePython from '../../assets/logo-python.png'
import iconeReact from '../../assets/logo-react.png'

import './index.scss'

export default function Header() {

	return (
		<div className='header'>
			<img src={fundoHeader} alt='' className='imgFundo' />
			<div className='apresentacao'>
				<h1>Mickael Luiz Dias</h1>
				<div className='desenv'>
					<img src={iconeReact} alt='' />
					<h2>Desenvolvedor</h2>
					<img src={iconePython} alt='' />
				</div>
				<h3>Análise e Desenvolvimento de Sistemas</h3>
			</div>
		</div>
	)
}