import "../src/styles/styles.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Grid } from "@material-ui/core";
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
              <Main />
            </Route>
            <Route exact path="/category/:catId">
              <Grid container spacing={1}>
                <Grid item xs={12} sm={2}>
                  asdakljdklajdklasj
                </Grid>
                <Grid item xs={12} sm={10}>
                  <ItemListContainer />
                </Grid>
              </Grid>
            </Route>
            <Route exact path="/item/:Id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
