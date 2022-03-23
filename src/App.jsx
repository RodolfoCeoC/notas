
function App() {
let varprueba = "Titulo";

const handleChangePrueba = (event) => {
  
  varprueba = event.target.value;
  //console.log(event.target.name, event.target.value);
};

  return (
    <div className="App">
      <h1>Hello</h1>
      <label htmlFor="pruebaID">Input de pruba</label>
      <input 

      id="pruebaID" 
      name="prueba" 
      type="text" 

      onChange={handleChangePrueba} 
      value = {varprueba} />
      
    </div>
    
  );
}
export default App;
  
