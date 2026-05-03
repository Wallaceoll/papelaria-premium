import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Personalizacao from './pages/Personalizacao';
import Contato from './pages/Contato';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Layout>
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/servicos"        element={<Servicos />} />
          <Route path="/personalizacao"  element={<Personalizacao />} />
          <Route path="/contato"         element={<Contato />} />
          <Route path="*"               element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '8rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>404</span>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400 }}>Página não encontrada</h1>
      <p style={{ color: 'var(--text-muted)' }}>A página que você procura não existe ou foi movida.</p>
      <a href="/" className="btn btn-primary">Voltar ao início →</a>
    </div>
  );
}