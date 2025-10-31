import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home';
import Contacto from './Contacto';
import Productos from './Productos';
import { Link, Routes, Route } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/contacto">Contacto</Link> |{' '}
        <Link to="/productos">Productos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </div>
  );
}

export default App

