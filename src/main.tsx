import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PageRoute } from './Routes/PageRoute'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render( // método render (renderização) para mostrar os componentes na página
  <React.StrictMode>
    <PageRoute />
  </React.StrictMode>
)
