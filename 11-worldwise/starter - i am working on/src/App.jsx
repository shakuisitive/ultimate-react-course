// imports from libraries
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing pages
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";

// importing components
import PageNav from "./components/PageNav";

// STARTING OUR APPLICATION!
function App() {
  return (
    <BrowserRouter>
      <h1>welcome to the site</h1>
      <PageNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;