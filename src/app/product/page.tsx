
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-workspace-dark mb-4">
          Google Workspace Add-ons
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Enhance your productivity with our suite of powerful Google Workspace add-ons
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div 
            key={product.slug}
            className="flex flex-col bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Product header */}
            <div className="p-6 border-b bg-gradient-to-r from-workspace-blue/5 to-workspace-green/5">
              <h2 className="text-xl font-semibold text-workspace-dark mb-2">
                {product.name}
              </h2>
              <p className="text-muted-foreground text-sm">
                {product.description}
              </p>
            </div>
            
            {/* Pricing */}
            <div className="p-6 text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                <span className="text-3xl font-bold text-workspace-dark">${product.monthlyPrice}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              
              <div className="text-sm text-muted-foreground mb-6">
                or ${product.yearlyPrice} per year (save {Math.round(100 - ((product.yearlyPrice / (product.monthlyPrice * 12)) * 100))}%)
              </div>
              
              <Button className="w-full mb-4" asChild>
                <Link to={`/${product.slug}`}>
                  View Details
                </Link>
              </Button>
            </div>
            
            {/* Features */}
            <div className="p-6 bg-workspace-gray/5 border-t mt-auto">
              <h3 className="font-medium text-sm uppercase text-muted-foreground mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <svg
                      className="h-4 w-4 text-workspace-green mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {product.features.length > 3 && (
                  <li className="text-sm text-workspace-blue hover:text-workspace-blue/80">
                    <Link to={`/${product.slug}`}>
                      + {product.features.length - 3} more features
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <p className="text-muted-foreground mb-6">
          We offer enterprise plans with advanced features, priority support, and custom development options.
        </p>
        <Button variant="outline" asChild>
          <Link to="/contact">Contact our Sales Team</Link>
        </Button>
      </div>
    </div>
  );
}
