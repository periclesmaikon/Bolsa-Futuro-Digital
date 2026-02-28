import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

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
    <header className="header-container">
        <h1 className="header-title">Pericles UI</h1>
        <nav className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/pesquisa">Pesquisa</Link>
            <Link to="/usuario">Usuario</Link>
        </nav>
    </header>
  );
};

export default Header;