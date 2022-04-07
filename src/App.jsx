import { useState } from 'react'

function App() {

  const [InputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });


  const handleClear = () => {
    setInputState({
      titulo: "",
      fecha: "",
      nota: "",
    })

  }

  const handleInputChange = (event) => {
    setInputState({
      //titulo: event.target.value,
      //fecha: "",
      //nota: ""
      ...InputState,
      [event.target.name]: event.target.value,
    });

    //console.log(event.target.name, event.target.value);
  };


  return (
    <div className="App">
      <h1>Hello</h1>

      <label htmlFor="titulo">Titulo</label>

      <input
        id="titulo"
        name="titulo"
        type="text"
        onChange={handleInputChange}
        value={InputState.titulo}
      />
      <br />
      <br />
      <label htmlFor="fecha">Fecha</label>

      <input
        id="fecha"
        name="fecha"
        type="text"
        onChange={handleInputChange}
        value={InputState.fecha} />
      <br />
      <br />
      <label htmlFor="nota">Nota</label>

      <input
        id="nota"
        name="nota"
        type="text"
        onChange={handleInputChange}
        value={InputState.nota} />


      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "5px",
        justifyContent: "center",
        alignItems: "",
      }}>

        <button type="button" class="btn btn-primary" onClick={handleClear}>Limpiar</button>
      </div>

    </div>



  );

}
export default App;

