// useState é um "hook" do React que dá MEMÓRIA ao componente.
import { useState } from 'react'
// Ícones da biblioteca react-icons (pacote Font Awesome 6).
import { FaMinus, FaPlus, FaArrowRotateLeft } from 'react-icons/fa6'
import Botao from './components/Botao'
import './App.css'

function App() {
  // 'contador' guarda o número atual. Começa em 0.
  // setContador é a função que muda esse valor (e re-renderiza a tela).
  const [contador, setContador] = useState(0)

  return (
    <main className="aula">
      <h1>Contador</h1>

      {/* Mostra o valor do estado na tela */}
      <p className="numero">{contador}</p>

      {/* Cada botão é o MESMO componente <Botao>, com props diferentes.
          Passamos um ícone na prop 'texto' e uma cor na prop 'cor'. */}
      <div className="linha">
        <Botao texto={<FaMinus />} cor="#ef4444" aoClicar={() => setContador(contador - 1)} />
        <Botao texto={<FaArrowRotateLeft />} cor="#6b7280" aoClicar={() => setContador(0)} />
        <Botao texto={<FaPlus />} cor="#22c55e" aoClicar={() => setContador(contador + 1)} />
      </div>
    </main>
  )
}

export default App
