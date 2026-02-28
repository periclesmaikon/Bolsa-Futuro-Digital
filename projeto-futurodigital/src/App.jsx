import { use, useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './components/themeSlice';
import Header from './components/header/header';

function App({semNome}) {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState(semNome);

  //Consts para modp escuro/claro
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  //UseEffect para modo escuro/claro
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

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

export default App
