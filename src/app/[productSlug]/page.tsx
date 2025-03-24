import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/products';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

interface ProductPageProps {
  params: {
    productSlug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.productSlug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found',
    };
  }
  
  return {
    title: `${product.name} - Google Workspace Add-on`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Google Workspace Add-on`,
      description: product.description,
      type: 'website',
    },
  };
}

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return products.map(product => ({
    productSlug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.productSlug);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="container mx-auto py-12 px-4 animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        {/* Product Header */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-workspace-blue/10 text-workspace-blue text-sm font-medium mb-3">
            Google Workspace Add-on
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-gradient-to-r from-workspace-blue to-workspace-green bg-clip-text text-transparent">{product.name}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{product.description}</p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Features Card - Takes 3/5 of the grid on desktop */}
          <Card className="md:col-span-3 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-workspace-blue to-workspace-green"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">Key Features</CardTitle>
              <CardDescription>Everything included in this add-on</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="h-6 w-6 rounded-full bg-workspace-green/10 flex items-center justify-center mr-3 shrink-0 group-hover:bg-workspace-green/20 transition-colors duration-200">
                      <CheckCircle className="h-4 w-4 text-workspace-green" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Pricing Card - Takes 2/5 of the grid on desktop */}
          <Card className="md:col-span-2 border border-workspace-gray/20 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-b from-white to-workspace-gray/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">Pricing</CardTitle>
              <CardDescription>Flexible options to suit your needs</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="mb-6 space-y-2">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">${product.monthlyPrice}</span>
                  <span className="text-muted-foreground ml-2 mb-1">/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-sm px-2 py-0.5 rounded-full bg-workspace-green/10 text-workspace-green font-medium">
                    Save {Math.round((1 - product.yearlyPrice / (product.monthlyPrice * 12)) * 100)}%
                  </div>
                  <p className="text-sm text-muted-foreground">${product.yearlyPrice}/year</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <a 
                  href={`/${product.slug}/checkout?plan=monthly`}
                  className="inline-flex w-full justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-workspace-blue hover:bg-workspace-blue/90 transition-colors"
                >
                  Subscribe Monthly
                </a>
                
                <a 
                  href={`/${product.slug}/checkout?plan=yearly`}
                  className="relative inline-flex w-full justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-workspace-green hover:bg-workspace-green/90 transition-colors overflow-hidden group"
                >
                  <span className="absolute -right-1 -top-1 bg-workspace-blue text-white text-xs px-2 py-0.5 rotate-12 shadow-md transform group-hover:-rotate-0 transition-transform">Best Value</span>
                  Subscribe Yearly
                </a>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              {product.marketplaceUrl && (
                <a 
                  href={product.marketplaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center items-center px-4 py-2.5 border border-workspace-blue/30 rounded-lg text-sm font-medium text-workspace-blue bg-transparent hover:bg-workspace-blue/5 transition-colors"
                >
                  View in Google Workspace Marketplace
                </a>
              )}
            </CardFooter>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 bg-gradient-to-r from-workspace-blue/10 to-workspace-green/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to enhance your workflow?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have streamlined their work with our Google Workspace add-ons.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-workspace-blue hover:bg-workspace-blue/90">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-workspace-blue/30 text-workspace-blue hover:bg-workspace-blue/5">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
