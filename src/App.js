import './App.css';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';


function App() {
  
    

return (
    <div className="App">
     <Navbar/>
    <ItemCount initial={1} stock={10}/>
    <ItemListContainer/>
    </div>
  );
}

export default App;
