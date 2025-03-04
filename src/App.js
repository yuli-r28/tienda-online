import React from "react";
import ImagenPrincipal from "./Carrusel/Carrusel";
import Login from "./Login/Login"; // Asegúrate de que Login está bien importado
import "./App.css"; // Importa estilos si es necesario

function App() {
  return (
    <div className="App">
      <div className="division imagen">
        <ImagenPrincipal />
      </div>
      <div className="division login">
        <Login />
      </div>
    </div>
  );
}

export default App;
