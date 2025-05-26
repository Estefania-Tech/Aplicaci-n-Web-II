// Proyecto React que utiliza todos los conceptos: REST + Swagger (simulado), React JS, Hooks, Context API, Axios, Rutas, Despliegue

// 1. Crear contexto global para manejar el tema de la app
import React, { useState, useEffect, useContext, useReducer, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const ThemeContext = createContext();

const initialState = { contador: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'reiniciar':
      return { contador: 0 };
    default:
      return state;
  }
}

function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const { tema } = useContext(ThemeContext);

  useEffect(() => {
    // Simulación de una petición REST con Axios (Swagger la documentaría)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsuarios(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={`p-4 ${tema === 'oscuro' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Usuarios</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Contador: {state.contador}</h2>
      <button onClick={() => dispatch({ type: 'incrementar' })} className="btn">Sumar</button>
      <button onClick={() => dispatch({ type: 'reiniciar' })} className="btn ml-2">Reiniciar</button>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link to="/">Inicio</Link>
      <Link to="/contador">Contador</Link>
    </nav>
  );
}

function App() {
  const [tema, setTema] = useState('claro');

  return (
    <ThemeContext.Provider value={{ tema, setTema }}>
      <BrowserRouter>
        <Navbar />
        <button
          onClick={() => setTema(prev => prev === 'claro' ? 'oscuro' : 'claro')}
          className="m-4 p-2 border"
        >
          Cambiar a tema {tema === 'claro' ? 'oscuro' : 'claro'}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contador" element={<Contador />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
