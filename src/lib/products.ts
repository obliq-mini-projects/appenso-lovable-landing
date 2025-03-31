
export interface Product {
  slug: string;
  name: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  marketplaceUrl?: string;
  lemonSqueezyIds: {
    productId: number;
    checkoutId: string;
    variants: {
      monthly: number;
      yearly: number;
    };
  };
}

export const products: Product[] = [
  {
    slug: "mail-merge",
    name: "Mail Merge for Workspace",
    description: "Send personalized emails to your contacts, include unique file attachments, track emails and schedule messages.",
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    features: [
      "Personalized emails with dynamic content",
      "Schedule emails to be sent at specific times",
      "Track email opens and clicks",
      "Attach unique files to each recipient",
      "Integration with Google Sheets for contact management",
      "Templates for common email scenarios"
    ],
    marketplaceUrl: "https://workspace.google.com/marketplace/app/mail_merge",
    lemonSqueezyIds: {
      productId: 738898,
      checkoutId: "673cab65-9159-4ae4-847d-3655bacb445f",
      variants: {
        monthly: 738898,
        yearly: 738903
      }
    }
  },
  {
    slug: "document-studio",
    name: "Document Studio",
    description: "Merge documents from data in Google Sheets and Forms. Automate contracts, invoices, agreements, and more.",
    monthlyPrice: 12.99,
    yearlyPrice: 129.99,
    features: [
      "Generate documents from spreadsheet data",
      "Create document templates with fillable fields",
      "Automatic document generation when forms are submitted",
      "Store generated documents in Google Drive",
      "Conditional formatting and content",
      "Batch processing for multiple documents"
    ],
    marketplaceUrl: "https://workspace.google.com/marketplace/app/document_studio",
    lemonSqueezyIds: {
      productId: 738899,
      checkoutId: "773cab65-9159-4ae4-847d-3655bacb445f",
      variants: {
        monthly: 738899,
        yearly: 738904
      }
    }
  },
  {
    slug: "email-sheets",
    name: "Email Sheets on Schedule",
    description: "Automatically email Google Spreadsheet reports and dashboards on a recurring schedule to your team.",
    monthlyPrice: 7.99,
    yearlyPrice: 79.99,
    features: [
      "Schedule regular spreadsheet reports",
      "Send specific sheets or ranges",
      "Format emails with custom HTML",
      "Conditional sending based on data",
      "Multiple recipient management",
      "PDF conversion options"
    ],
    marketplaceUrl: "https://workspace.google.com/marketplace/app/email_sheets",
    lemonSqueezyIds: {
      productId: 738900,
      checkoutId: "873cab65-9159-4ae4-847d-3655bacb445f",
      variants: {
        monthly: 738900,
        yearly: 738905
      }
    }
  }
];

// Lookup function by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

// Lookup function by product ID
export function getProductById(id: number): Product | undefined {
  return products.find(product => product.lemonSqueezyIds.productId === id);
}
