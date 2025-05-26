/*REST con Swagger*/
paths:
  /usuarios:
    get:
      summary: Lista todos los usuarios
      responses:
        '200':
          description: OK

/*React JS*/
function App() {
  return <h1>Hola, mundo con React!</h1>;
}
/*Hooks en React*/
/*useState*/
const [contador, setContador] = useState(0);

/*useEffec*/
useEffect(() => {
  console.log('El componente se montó');
}, []);

/*useContext*/
const MiContexto = React.createContext();
const valor = useContext(MiContexto);

/*useReducer*/
const [estado, dispatch] = useReducer(reducer, estadoInicial);

/*Context API*/
const TemaContext = React.createContext();

function App() {
  return (
    <TemaContext.Provider value="oscuro">
      <MiComponente />
    </TemaContext.Provider>
  );
}

function MiComponente() {
  const tema = useContext(TemaContext);
  return <div>El tema actual es {tema}</div>;
}

/*Peticiones HTTP con Axios*/
import axios from 'axios';

useEffect(() => {
  axios.get('https://api.ejemplo.com/usuarios')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}, []);

/*Rutas y navegación con React Router*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}




