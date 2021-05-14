import './App.css';
import Navbar from './components/Navbar';
import Lista from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Lista name="Camisetas"/>
     <Lista name="Remeras"/>
     <Lista name="Botines"/>
    </div>
  );
}

export default App;
