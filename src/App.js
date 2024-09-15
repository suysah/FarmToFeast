import React from "react";
// import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FarmerDashboard from "./pages/FarmerDashboard";
import ConsumerDashboard from "./pages/ConsumerDashboard";
// import Footer from "./components/Footer";x
import Register from "./pages/Register";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import Chat from "./components/Chat";
import CropUpdates from "./components/CropUpdates";
import Contarcts from "./components/Contarcts";
import ProductList from "./components/ProductList";
import AddCrop from "./components/AddCrop";
import FarmerConnect from "./components/FarmerConnect";
import MyCrop from "./components/MyCrops";

const farmerId = "100";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/farmer-dashboard"
          element={<FarmerDashboard userId={farmerId} />}
        >
          <Route index element={<Navigate replace to="chat" />} />
          <Route path="chat" element={<Chat />} />
          <Route path="myCrop" element={<MyCrop userId={farmerId} />} />
          <Route path="addCrop" element={<AddCrop userId={farmerId} />} />
          <Route path="contracts" element={<Contarcts userId={farmerId} />} />
          <Route path="farmerConnect" element={<FarmerConnect />} />
        </Route>
        <Route path="/consumer-dashboard" element={<ConsumerDashboard />}>
          <Route index element={<Navigate replace to="chat" />} />
          <Route path="chat" element={<Chat />} />
          <Route path="products" element={<ProductList />} />
          <Route path="cropUpdates" element={<CropUpdates />} />
          <Route path="contracts" element={<Contarcts />} />
        </Route>

        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
