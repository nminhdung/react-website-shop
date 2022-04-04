import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Error from "./pages/Error";
import ProductDetail from "./pages/productDetail/ProductDetail";
import About from "./pages/about/About";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Router>
    <Navbar/>
    <Login/>
    <Cart/>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/about"  >
          <About/>
        </Route>
        <Route path="/product/:id">
          <ProductDetail/>
        </Route>

        <Route path="*"  >
          <Error/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
