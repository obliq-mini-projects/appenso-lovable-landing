
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div id="products-section">
          <ProductSection />
        </div>
        <div id="faq-section">
          <FAQSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
