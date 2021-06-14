import "../src/styles/styles.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:catId">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:Id">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Cart />
            </Route>
          </Switch>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
