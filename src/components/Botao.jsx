function Botao({ texto, cor, aoClicar }) {
  return (
    <button className="botao" style={{ background: cor }} onClick={aoClicar}>
      {texto}
    </button>
  )
}

export default Botao
