import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FarmerDashboard from "./pages/FarmerDashboard";
import ConsumerDashboard from "./pages/ConsumerDashboard";
// import Footer from "./components/Footer";x
import Register from "./pages/Register";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/consumer-dashboard" element={<ConsumerDashboard />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
