import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./paginas/home";
import Favoritos from "./paginas/favoritos";
import Original from "./paginas/original";
import Informativa from "./paginas/informativa";
import Detalle from "./paginas/detalle";

function App() {
  return (
    <>
      <Router>
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/original">Original</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informativa" element={<Informativa />} />
          <Route path="/original" element={<Original />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/detalle/:depto/:municipio" element={<Detalle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
