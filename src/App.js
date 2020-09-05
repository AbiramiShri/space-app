import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./helper/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HeaderComponent from "../src/screens/header/views/headerComponent"


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HeaderComponent />
        <Router>
          <RoutesComponent />
        </Router>
      </Provider>
    )
  }
}

export default App;