import { useState } from 'react'
import Botao from './components/Botao'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <main className="app">
      <h1>Contador</h1>
      <span className="rotulo">Valor atual</span>
      <p className="numero" key={contador}>{contador}</p>
      <div className="linha">
        <Botao
          texto="-"
          cor="linear-gradient(135deg, #f43f5e, #ef4444)"
          aoClicar={() => setContador(contador - 1)}
        />
        <Botao
          texto="Reset"
          cor="linear-gradient(135deg, #64748b, #334155)"
          aoClicar={() => setContador(0)}
        />
        <Botao
          texto="+"
          cor="linear-gradient(135deg, #22c55e, #10b981)"
          aoClicar={() => setContador(contador + 1)}
        />
      </div>
    </main>
  )
}

export default App
