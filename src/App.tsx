
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ProductsPage from "./app/product/page";
import ProductPage from "./app/[productSlug]/page";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div id="products-section">
        <ProductSection />
      </div>
      <div id="faq-section">
        <FAQSection />
      </div>
      <CTASection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/:productSlug" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
