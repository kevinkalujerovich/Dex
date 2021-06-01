import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
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
        <ItemListContainer/>
          </Route>
          <Route exact path="/category/:catId">
          <br></br><br></br><br></br><br></br>
          <ItemListContainer/>
          </Route>
          <Route exact path="/item/:Id">
          <br></br><br></br><br></br><br></br>
          <ItemDetailContainer/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;

