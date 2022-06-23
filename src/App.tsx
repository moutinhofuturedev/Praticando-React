import { ReactUI } from './components/ReactUI'

import reactImg from './assets/react_icon.svg'
import './styles/app.scss'

import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() { // um componente é uma função que retorna um html
  const [ counter, setCounter ] = useState<string[]>(['React']) // o valor inicial do estado é um array 

  function createReactUI() {
    setCounter([...counter,'React'])
  }

  return(
    <div className="main_page">
      <aside>
        <img src={reactImg} alt='Logo botão react' />
        <h1>Welcome to the World of React</h1>
        <p>A Javascript library for building user interfaces</p>
      </aside>
      <main>
        <div>
          {counter.map(reacts => {
            return <ReactUI text={reacts} />
          })}
          <button onClick={createReactUI}>Add React</button>
        </div>

        <p>Go to <Link to="/catalog">Catalog</Link> </p>
      </main>
    </div>
  )
}

export default App
