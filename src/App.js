import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Etkinliklerim from "./pages/Etkinliklerim";
import Son from "./pages/Son";
import AlanGuncelleme from "./pages/AlanGuncelleme";
import BasvuruFormu from "./pages/BasvuruFormu";
import SosyalPolitikalar from "./pages/SosyalPolitikalar";
import Takvim from "./pages/Takvim";
import AlanTanimlama from "./pages/AlanTanimlama";
import Home from "./pages/Home";
import EditContact from "./pages/EditContact";
const App = () => {

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/alanTanimlama" element={<AlanTanimlama />} />
        <Route path="/takvim" element={<Takvim />} />
        <Route path="/sosyalPolitikalar" element={<SosyalPolitikalar />} />
        <Route path="/basvuruFormu" element={<BasvuruFormu />} />
        <Route path="/alanGuncelleme/:id" element={<AlanGuncelleme />} />
        <Route path="/son" element={<Son />} />
        <Route path="/etkinliklerim" element={<Etkinliklerim />} />
      </Routes>
    </div>
  );
};

export default App;
