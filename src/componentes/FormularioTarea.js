import "../stylesheets/FormularioTarea.css";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export const FormularioTarea = (props) => {

  const [input,setInput] = useState("");

  //Extrae el valor del input
  const manejarCambio = e => {
    setInput(e.target.value); 

  }

  const manejarEnvio = ()=> {

    const tareaNueva = {
      id: uuidv4(1),
      texto: input,
      completada: false
    };
    
    props.onSubmit(tareaNueva); //Lo que sucede cuando el formulario se intente enviar

  }
  
  return(
    <form className="formulario-tarea">
      <input 
        className="input-tarea"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button 
        className="boton-tarea"
        onClick={(e)=>{
          e.preventDefault();
          manejarEnvio();
        }}
      >
          Agregar Tarea
      </button>
    </form>
  );
}