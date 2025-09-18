import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from '../src/components/header/header.tsx';
import Footer from '../src/components/footer/footer.tsx';

// Pages
import Home from '../src/pages/home/home.tsx';
import Sobre from '../src/pages/sobre/sobre.tsx';
import Contato from '../src/pages/contato/contato.tsx';
import Projeto from '../src/pages/projetos/projeto.tsx';

const App: React.FC = () => (
  <Router>
    <div className="app-wrapper">
      <Header />

      <main className="main-content">
        <div className="container py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projeto" element={<Projeto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  </Router>
);

export default App;
