# Contador — Componentes, Props e useState

Projeto de aula (introdução ao React) do curso de **Programação para Internet** — IFRN.

O objetivo é revisar **componentes** e **props** e introduzir o hook **`useState`** através de um exemplo simples: um contador com os botões **+**, **−** e **Zerar**.

## O que este projeto ensina

- **Componente reutilizável:** o mesmo `<Botao>` é usado 3 vezes, com props diferentes.
- **Props:** `texto` (o conteúdo, que pode ser até um ícone), `cor` (cor de fundo) e `aoClicar` (a função executada no clique).
- **useState:** o estado `contador` guarda o número atual; cada clique chama `setContador`, o React atualiza o valor e **re-renderiza** a tela.
- **Ícones:** uso da biblioteca [`react-icons`](https://react-icons.github.io/react-icons/) nos botões.

## Como rodar

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Instalar as dependências (só na primeira vez, ou após clonar o projeto)
npm install

# 2. Rodar o projeto em modo de desenvolvimento
npm run dev
```

Depois abra o endereço que aparece no terminal (geralmente <http://localhost:5173>).

## Estrutura dos arquivos

```
src/
├── components/
│   └── Botao.jsx     # Componente reutilizável (props: texto, cor, aoClicar)
├── App.jsx           # Tela principal: estado do contador + os 3 botões
├── App.css           # Estilos do contador
├── index.css         # Estilos base
└── main.jsx          # Ponto de entrada da aplicação
```

## Como funciona

No `App.jsx`, o estado guarda o número:

```jsx
const [contador, setContador] = useState(0)
```

Cada botão é o **mesmo componente**, recebendo props diferentes:

```jsx
<Botao texto={<FaMinus />} cor="#ef4444" aoClicar={() => setContador(contador - 1)} />
<Botao texto={<FaArrowRotateLeft />} cor="#6b7280" aoClicar={() => setContador(0)} />
<Botao texto={<FaPlus />} cor="#22c55e" aoClicar={() => setContador(contador + 1)} />
```

E o componente `Botao` apenas usa essas props:

```jsx
function Botao({ texto, cor, aoClicar }) {
  return (
    <button className="botao" style={{ backgroundColor: cor }} onClick={aoClicar}>
      {texto}
    </button>
  )
}
```

## Biblioteca de ícones

Os ícones vêm da [`react-icons`](https://react-icons.github.io/react-icons/). Para instalar:

```bash
npm install react-icons
```

Para usar, importe o ícone desejado e use como um componente:

```jsx
import { FaPlus } from 'react-icons/fa6'

<FaPlus />
```

> Dica: procure o nome do ícone no site <https://react-icons.github.io/react-icons/> e copie o import indicado.

## Tecnologias

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [react-icons](https://react-icons.github.io/react-icons/)
