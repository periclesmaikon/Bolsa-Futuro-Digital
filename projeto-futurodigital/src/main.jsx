import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './components/store.jsx';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './pages/mainPage.jsx';
import ContactPage from './pages/contactPage.jsx';
import Search from './pages/search.jsx';
import User from './pages/user.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage semNome="Sem Nome Definido"/>}/>
          <Route path="/contato" element={<ContactPage/>}/>
          <Route path="/pesquisa" element={<Search/>}/>
          <Route path="/usuario/:user" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
