import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "../components/pages/Cart/Cart";
import { Home } from "../components/pages/Home/Home";
import { ItemDetailContainer } from "../components/ui/molecules/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/ui/molecules/ItemListContainer/ItemListContainer";
import { NavBar } from "../components/ui/organism/AppBar/NavBar";
import { Footer } from "../components/ui/organism/Footer/Footer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
