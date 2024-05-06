import './App.css'
import Contactsection from './components/Contactsection/Contactsection'
import Herosection from './components/Herosection/Herosection'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <div>
      <Navigation/>
      <main className='main_conatainer'>
        <Herosection/>
        <Contactsection/>
      </main>
    </div>
  )
}

export default App
