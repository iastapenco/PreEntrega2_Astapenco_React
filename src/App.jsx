import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ListItemContainer from "./components/ListItemContainer/ListItemContainer";
import InicioPage from "./Pages/InicioPage/InicioPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import DetailPage from "./Pages/DetailPage/DetailPage";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/products/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
