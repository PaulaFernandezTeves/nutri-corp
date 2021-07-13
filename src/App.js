import "./App.css";
import "./styles/briceyda.css";
import "./styles/brighit.css";
import "./styles/mery.css";
import "./styles/nancy.css";
import "./styles/paula.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/home/Home";
import { ShoppingCart } from "./components/shopping/ShoppingCart";
import { Login } from "./components/home/Login.js";
import ClientMe from './components/shopping/ClientMe';
import ClientOther from './components/shopping/ClienteOther';
import { fb } from "./firebase/firebase";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  fb.auth().onAuthStateChanged((user) => {
    if (user) setUser(user);
  });

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (user ? <Redirect to="/productos" /> : <Login />)}
        />
        <Route exact path="/productos" component={Home} />
        <Route path="/compras" component={ShoppingCart} />
        <Route path="/clienteyo" component={ClientMe} />
        <Route path="/clienteotro" component={ClientOther} />
      </Switch>
    </Router>
  );
}

export default App;
