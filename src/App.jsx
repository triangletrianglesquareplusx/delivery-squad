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
import Hackathon from "./Pages/Hackathon";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<SingleArticle />} />
        <Route path="/restaurants" element={<RestaurantsFullPage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/faq" element={<FAQFullPage />} />
        <Route path="/hackathon" element={<Hackathon />} />
      </Routes>
      <Footer />
    </>
  );
}
