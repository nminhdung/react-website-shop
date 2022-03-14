import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Error from "./pages/Error";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/about"  >
          <Home />
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
