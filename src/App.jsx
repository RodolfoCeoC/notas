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

  const handleReset = () => {
    localStorage.clear();
    
  }

  let arregloNotas = JSON.parse(localStorage.getItem("notas")) || [];

  const handleClickGuardar = () => {
    arregloNotas.push(InputState);
    localStorage.setItem("notas", JSON.stringify(arregloNotas));
    handleClear();
  };

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
    <div className="App container">
      <div className="row">
        <div className="row">
          <div className="col p-4">
            <div className='text-center'>
            <h3 className='text-center'>Lista</h3>
            {arregloNotas.length === 0 ?
              "No existen notas guardadas"
              :
              (
                <ol>
                  {arregloNotas.map((item) => {
                    return (
                      <li>
                        {item.titulo} ({item.fecha}) ({item.nota})
                      </li>
                    )
                  })}
                </ol>
              )
            }
           </div>
          </div>
          <div className="col text-center mx-auto p-4">
            <h1>Notas</h1>

            <label className="mb-2" style={{ width: "100%" }}>Titulo
              <input
                id="titulo"
                name="titulo"
                type="text"
                onChange={handleInputChange}
                value={InputState.titulo}
              />
            </label>


            <br />
            <br />
            <label className="mb-2">Fecha
              <input
                id="fecha"
                name="fecha"
                type="text"
                onChange={handleInputChange}
                value={InputState.fecha} />
            </label>

            <br />
            <br />

            <label className="mb-2">Nota
              <input
                id="nota"
                name="nota"
                type="text"
                onChange={handleInputChange}
                value={InputState.nota} />
            </label>

            <div style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}>

              <div class="btn-group" role="group" aria-label="Basic mixed styles example">

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={handleClear}>
                  Limpiar
                </button>
                
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={handleClickGuardar}
                  style={{ marginLeft: "25px" }}>
                  Guardar
                </button>

                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={handleReset}
                  style={{ marginLeft: "25px" }}>
                  Reset Lista
                </button>

              </div>

            </div>

          </div>

        </div>


      </div>


    </div>




  );

}
export default App;

