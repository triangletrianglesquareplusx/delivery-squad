import React from "react";
import "./Restaurants.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Articles from "./Pages/Articles";
import SingleArticle from "./Pages/SingleArticle";
import RestaurantsFullPage from "./Pages/RestaurantsFullPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shopping from "./Components/Shopping/Shopping";
import FAQFullPage from "./Pages/FAQFullPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import AdminPage from "./Pages/AdminPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<SingleArticle />} />
        <Route path="/restaurants" element={<RestaurantsFullPage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/faq" element={<FAQFullPage />} />
      </Routes>
      <Footer />
    </>
  );
}
