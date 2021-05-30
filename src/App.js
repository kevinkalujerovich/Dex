import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  
    

return (
    <div className="App">
    <Router>
   <Navbar/>
        <Switch>
        <Route exact path="/">
        <br></br><br></br><br></br><br></br>
          </Route>
          <Route path="/category/:id">
          <br></br><br></br><br></br><br></br>
      <ItemDetailContainer/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;

