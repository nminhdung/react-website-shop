import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Error from "./pages/Error"

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
        <Route path="*"  >
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
