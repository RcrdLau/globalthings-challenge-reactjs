import React from "react";
import { Routes, Route, Navigate, createBrowserRouter } from "react-router-dom";
// pages
import CategoriesPage from "../pages/CategoriesPage";
import HeroesPage from "../pages/HeoresPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CategoriesPage />,
  },
]);

const Main = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/categories" />} />
    <Route path="*" element={<Navigate to="/categories" />} />
    <Route path="/categories" element={<CategoriesPage />} />
    <Route path="/heroes" element={<HeroesPage />} />
  </Routes>
);

export default Main;
