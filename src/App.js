import './App.css';
import AddTarea from './components/addtarea';
import Tarea from './components/tarea';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [input, setInput] = useState('');
  
  const [tareas, setTareas] = useState([]);

  const manejarInput = e => {
    e.preventDefault()
    setInput(e.target.value)
  }
  
  const manejarEnvio = e => {
    e.preventDefault();
    const nuevaTarea = {
      id: uuidv4(),
      estado: true,
      descripcion: input
    }
    
    setTareas([nuevaTarea, ...tareas]);
    
    console.log(tareas);
  }

  const toggleEstado = id => {
    const tareasActualizadas = tareas.map((tarea) => {
      if(tarea.id === id)
      {
        tarea.estado = !tarea.estado;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    console.log(tareas)
  }
  
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <div className="App">
      <h1 className='tareas'>Tareas</h1>
      <div className='container-principal'>
        <AddTarea value={input} manejarEnvio={manejarEnvio} manejarInput={manejarInput}></AddTarea>
        <>
          {
            tareas.map((tarea) => {
              return(
                <Tarea 
                  key={tarea.id}
                  id = {tarea.id}
                  descripcion={tarea.descripcion}
                  estado={tarea.estado}
                  toggleEstado = {toggleEstado}
                  eliminarTarea = {eliminarTarea}
                ></Tarea>
              );
              }
            )
          }
        </>
      </div>
    </div>
  );
}

export default App;
