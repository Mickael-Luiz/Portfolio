import Header from './section/header'
import Body from './section/body'

import './App.scss'
import Perfil from './section/perfil/perfil'
import Footer from './section/footer'

function App() {

  return (
    <div className='App'>
      <Header />
      <div className='effects' >
        {/* <div className='lineEffect' ></div> */}
        <div className='lineEffect' ></div>
      </div>
      <Perfil />
      <div className='effects' >
        <div className="lineEffect"></div>
      </div>
      <Body />
      <div className='effects' >
        <div className="lineEffect"></div>
      </div>
      <Footer />
    </div>
  )
}
export default App
