import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Header></Header>
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/cart">
            <Header></Header>
            <Cart></Cart>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
