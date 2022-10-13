import fundoHeader from '../../assets/fundo-header.jpg'
import preto from '../../assets/preto.gif'
import transparente from '../../assets/transparente.gif'
import iconePython from '../../assets/logo-python.png'
import iconeReact from '../../assets/logo-react.png'

import style from './index.module.scss'

export default function Header() {

	return (
		<div className={style.header}>
			<img src={preto} alt='' className={style.imgFundo} />
			<div className={style.apresentacao}>
				<h1>Mickael Luiz Dias</h1>
				<div className={style.desenv}>
					<img src={iconeReact} alt='' />
					<h2>Desenvolvedor</h2>
					<img src={iconePython} alt='' />
				</div>
				<h3>Análise e Desenvolvimento de Sistemas</h3>
			</div>
		</div>
	)
}