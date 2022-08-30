import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colaboradores from './componentes/Colaboradores';
import Header from './componentes/Header';
import {useState} from "react";

function App() {
  const [buscador, setBuscador] = useState("");
  return (
    <div className="App">
     <Header setBuscador = {setBuscador}/>
     <Colaboradores buscador ={buscador}/>
    </div>
  );
}

export default App;
