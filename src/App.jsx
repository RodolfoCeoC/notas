import { useState } from 'react'

function App() {

  const [InputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const initialState = JSON.parse(localStorage.getItem("notas")) || [];
  const [notas, setnotas] = useState(initialState)

  const handleClear = () => {
    setInputState({
      titulo: "",
      fecha: "",
      nota: "",
    })

  }

  const handleClickGuardar = () => {
    setnotas([...notas, InputState])
    localStorage.setItem("notas", JSON.stringify(notas));
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

  const handleBorrarNota = (index) => {
    const nuevoArreglo = [];

    notas.forEach((nota, i) => {
      if (index !== i) {
        nuevoArreglo.push(nota)
      }
    });

    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    setnotas([...nuevoArreglo]);
  };

  const handleVaciar = () => {
    const nuevoArreglo2 = [];
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo2));
    setnotas([...nuevoArreglo2]);
    localStorage.clear([nuevoArreglo2])
  }

  return (
    <div className="App container"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "5px",
        justifyContent: "left",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <div className="row">
        <div className="row">
          <div className="col p-4">
            <div className='text-center'>
              <h3 className='text-center'>Lista</h3>
              {notas.length === 0 ?
                "No existen notas guardadas"
                :
                (
                  <ol>
                    {notas.map((item, index) => {
                      return (
                        <li key={index}>
                          {item.titulo} ({item.fecha})&nbsp;
                          <i>
                            <i className="bi bi-x-circle-fill"
                              onClick={() => handleBorrarNota(index)}
                              style={{
                                color: "purple",
                                fontSize: "1rem",
                                cursor: "pointer"
                              }}></i>
                          </i>
                        </li>
                      )
                    })}
                  </ol>
                )
              }
              <br />

              <button type="button" className='btn btn-warning' onClick={handleVaciar}
              >Vaciar
              </button>

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
            <label className="mb-2" style={{ width: "100%" }}>Fecha
              <input
                id="fecha"
                name="fecha"
                type="date"
                style={{
                  width: "100%",
                  textAlign: "center"
                }}
                onChange={handleInputChange}
                value={InputState.fecha} />
            </label>

            <br />
            <br />

            <label className="mb-2">Nota
              <textarea
                id="nota"
                name="nota"
                type="text"
                onChange={handleInputChange}
                value={InputState.nota} />
            </label>

            <br />
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">

              <button
                type="button"
                className="btn btn-primary"
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
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default App;