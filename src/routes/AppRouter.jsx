import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { Cart } from "../components/pages/Cart/Cart";
import { Home } from "../components/pages/Home/Home";
import { Login } from "../components/pages/Login/Login";
import { Orders } from "../components/pages/Orders/Orders";
import { Purchase } from "../components/pages/Purchase/Purchase";
import { Register } from "../components/pages/Register/Register";
import { ItemDetailContainer } from "../components/ui/molecules/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/ui/molecules/ItemListContainer/ItemListContainer";
import { NavBar } from "../components/ui/organism/AppBar/NavBar";
import { Footer } from "../components/ui/organism/Footer/Footer";
import { NotFound } from "../components/ui/organism/NotFound/NotFound";
import { useAuth } from "../context/AuthContext";

export const AppRouter = () => {
  const { currentUser } = useAuth();

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/auth/login"
          element={!currentUser ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/auth/register"
          element={!currentUser ? <Register /> : <Navigate to={"/"} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route
          path="/cart"
          element={currentUser ? <Cart /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/purchase"
          element={currentUser ? <Purchase /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/orders"
          element={currentUser ? <Orders /> : <Navigate to="/auth/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
