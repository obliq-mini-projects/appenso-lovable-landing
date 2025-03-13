
import React from "react";
import ProductTable from "./ProductTable";

const ProductSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-workspace-dark sm:text-4xl mb-6 font-poppins">
            Integrated applications for your workflow
          </h2>
          <p className="text-lg text-muted-foreground font-poppins">
            Our productivity tools integrate seamlessly with Google Workspace to enhance your team's capabilities.
          </p>
        </div>

        <div className="mt-16">
          <ProductTable />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
