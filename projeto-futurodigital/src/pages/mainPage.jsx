import { useState } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../components/themeSlice';
import Header from '../components/header/header';

function MainPage({semNome}) {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState(semNome);

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <h1>Pericles Maikon</h1>
      
      <div>
        <input className="input"
          type="text" 
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
        <h2>Seu nome é: {nome}</h2>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contagem de cliques: {count}
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(toggleTheme())}>
        Alterar Tema
        </button>
      </div>
    </>
  )
}

export default MainPage