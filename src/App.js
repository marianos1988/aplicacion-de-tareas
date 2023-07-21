import './App.css';
import { ListaTareas } from './componentes/ListaTareas';
import { Titulo } from './componentes/Titulo.js';

function App() {

  return (
    <div className="App">
      <Titulo />
      <ListaTareas/>
    </div>

  );
}

export default App;
