
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ProductsPage from "./app/product/page";
import ProductPage from "./app/[productSlug]/page";
import NotFound from "./pages/NotFound";

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
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductsPage />} />
              <Route path="/:productSlug" element={<ProductPage />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
      <Toaster />
    </Router>
  );
};

export default App;
