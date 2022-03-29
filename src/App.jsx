import {useState} from 'react'

function App() {

const [pruebaState, setPruebaState] = useState("");
const [tituloState, setTituloState] = useState("");
const [fechaState, setFechaState] = useState("");
const [notaState, setNotaState] = useState("");

  //let varprueba = "Titulo";

const handleChangePrueba = (event) => {
  setPruebaState(event.target.value);
  
  //console.log(event.target.name, event.target.value);
};

const handleChangeTitulo = (event) => {
  setTituloState(event.target.value);
  
  //console.log(event.target.name, event.target.value);
};

const handleChangeFecha = (event) => {
  setFechaState(event.target.value);
  
  //console.log(event.target.name, event.target.value);
};

const handleChangeNota = (event) => {
  setNotaState(event.target.value);
  
  //console.log(event.target.name, event.target.value);
};
  return (
    <div className="App">
      <h1>Hello</h1>

      <label htmlFor="pruebaID">Input de prueba</label>
      <input 
      id="pruebaID" 
      name="prueba" 
      type="text" 
      onChange={handleChangePrueba} 
      value = {pruebaState} />
<br />
<br />
      <label htmlFor="titulo">Titulo</label>
      <input 
      id="titulo" 
      name="titulo" 
      type="text" 
      onChange={handleChangeTitulo} 
      value = {tituloState} />
<br />
<br />
      <label htmlFor="fecha">Fecha</label>
      <input 
      id="fecha" 
      name="fecha" 
      type="text" 
      onChange={handleChangeFecha} 
      value = {fechaState} />
<br />
<br />
      <label htmlFor="nota">Nota</label>
      <input 
      id="nota" 
      name="nota" 
      type="text" 
      onChange={handleChangeNota} 
      value = {notaState} />
      
    </div>
    
  );
}
export default App;
  
