import Header from './section/header'
import './App.scss'
import Main from './section/mains'

function App() {

  return (
    <div className="App">
      <div className='containerHeader'>
        <Header />
      </div>
      <div className='containerMain'>
        <Main/>
      </div>
      <div className='containerFooter'>
      </div>
    </div>
  )
}
export default App
