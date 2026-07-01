// Botao: um botão reutilizável.
// Props:
//  - texto: o que aparece dentro do botão (pode ser texto ou um ícone)
//  - cor: a cor de fundo do botão
//  - aoClicar: a função que roda quando clicamos no botão
function Botao({ texto, cor, aoClicar }) {
  return (
    // A prop 'cor' vira a cor de fundo do botão.
    <button className="botao" style={{ backgroundColor: cor }} onClick={aoClicar}>
      {texto}
    </button>
  )
}

export default Botao
