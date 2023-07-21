import "../stylesheets/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Tarea = ({ id, texto,completada, completarTarea, eliminarTarea })=> {
  return(
    <div className={`${(completada) ? "contenedor-tarea completada" : "contenedor-tarea"}`}>
      <div 
        className="texto-tarea"
        onClick={()=> completarTarea(id)}
      >
        {texto} 
      </div>
      <div className="contenedor-iconos-tarea">
        <AiOutlineCloseCircle 
          className="icono-tarea"
          onClick={()=>eliminarTarea(id)}
        />
      </div>
    </div>
  );
};