import "../src/index.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FavoriteMain from "./components/FavoriteMain";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext";
import { FavoriteProvider } from "./contexts/FavoriteContext";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/category/:catId">
                <ItemListContainer />
              </Route>
              <Route exact path="/item/:Id">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/favorite">
                <FavoriteMain />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </div>
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;
