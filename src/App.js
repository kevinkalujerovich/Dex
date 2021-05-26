import './App.css';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
    

return (
    <div className="App">
     <Navbar/>
    <ItemCount initial={1} stock={10}/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
