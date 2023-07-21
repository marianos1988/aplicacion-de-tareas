
import "../stylesheets/Titulo.css";
import Logo from "../img/logo.png";

export const Titulo = () => {
  return(
    <div className="contenedor-titulo">
      <img
        className="img-logo"
        src={Logo}
        alt="Logo Tareas" 
      />
      <h1 className="titulo">Aplicacion de Tareas</h1>
    </div>
  );
};