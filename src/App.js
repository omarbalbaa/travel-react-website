import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Services" Component={Services} />
          <Route path="/Products" Component={Products} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
