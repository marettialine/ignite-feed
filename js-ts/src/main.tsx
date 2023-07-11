import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

// O erro que estava dando era pois o react tinha medo do elemento com esse id em algum momento não estar em tela
// Colocar o "!" indica que o elemento de id = 'root' sempre estará em tela
// Porém o uso do "!" é melhor evitar
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
