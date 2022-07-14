import { ReactUI } from './components/ReactUI'

import reactImg from './assets/react_icon.svg'
import './styles/app.scss'

import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

function App() { // um componente é uma função que retorna um html
  const [ counter, setCounter ] = useState<string[]>([]) // o valor inicial do estado é um array 
  const [ value, setValue ] =useState('')

  function createReactUI(event: FormEvent) {
    event.preventDefault()
    setCounter([...counter, value])
  }

  return(
    <div className="main_page">
      <aside>
        <img src={reactImg} alt='Logo botão react' />
        <h1>Welcome to the World of React</h1>
        <p>A Javascript library for building user interfaces</p>
      </aside>
      <main>
        <form onSubmit={createReactUI}>
          {counter.map(reacts => {
            return <ReactUI text={reacts} />
          })}
          <button type='submit'>Add React</button>
          <input type="text" onChange={event => setValue(event.target.value)}/>
        </form>

        <p>Go to <Link to="/catalog">Catalog</Link> </p>
      </main>
    </div>
  )
}

export default App
