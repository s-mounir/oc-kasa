import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Flat from './pages/Flat';
import Header from './components/Header';
import Error from './pages/Error';
import Footer from './components/Footer';
import createGlobalStyle from 'styled-components'
import { NavProvider } from './utils/context'

const GlobalStyle = createGlobalStyle`
  div {
    font-family: Montserrat;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <NavProvider>
        <GlobalStyle/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:flatNumber" element={<Flat />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </NavProvider>
     
    </Router>
  </React.StrictMode>
)