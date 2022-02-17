import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
