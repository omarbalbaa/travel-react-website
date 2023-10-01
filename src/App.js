import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Services" exact Component={Services} />
          <Route path="/Products" exact Component={Products} />
          <Route path="/sign-up" exact Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
