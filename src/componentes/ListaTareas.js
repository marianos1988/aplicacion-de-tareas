import { useState } from "react";
import "../stylesheets/ListaTareas.css";
import { Tarea } from "./Tarea";
import { FormularioTarea } from "./FormularioTarea";

export const ListaTareas = () => {

  const [tareas,setTareas] = useState([]);

  const agregaTarea = (tarea)=>{
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea,...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {

    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
        
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }
 
  return( 
    <div className="contenedor-lista-tareas">
      <h1>Mis Tareas</h1>
      <FormularioTarea onSubmit={agregaTarea} />
      <div className="lista-de-tareas">
        {
          tareas.map(tarea=>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={()=>completarTarea(tarea.id)}
            />
          ) 
        }
      </div>
    </div>
  );
}