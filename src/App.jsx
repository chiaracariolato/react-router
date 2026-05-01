import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DettaglioProdotto from "./pages/DettaglioProdotto";
import NotFound from "./pages/NotFound";

export default function App() {
  const [prodotti, setProdotti] = useState([]);

  function fetchProdotti() {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProdotti(response.data))
      .catch(error => console.error("Errore nel caricamento della lista dei prodotti ", error))
  }

  useEffect(() => {
    fetchProdotti();
  }, [])

  return (

    <BrowserRouter>
      <div className="container" style={{ minHeight: '100vh', border: '2px solid red' }}>
        <div className="container mt-4">
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/prodotti" >
                <Route index element={<Prodotti prodotti={prodotti} />} />
                <Route path=":id" element={<DettaglioProdotto />} />
              </Route>
              <Route path="/chisiamo" element={<ChiSiamo />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div >
    </BrowserRouter>

  );
}
