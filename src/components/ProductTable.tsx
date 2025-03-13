
import React from "react";
import { ArrowRight, Mail, FileText, Table, Calendar, FileEdit, HardDrive, CheckCircle } from "lucide-react";
import { Table as ShadcnTable, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface AppCompatibility {
  name: string;
  icon: React.ReactNode;
}

interface Product {
  id: number;
  icon: React.ReactNode;
  iconBg: string;
  name: string;
  description: string;
  compatibleWith: AppCompatibility[];
}

const googleApps: Record<string, AppCompatibility> = {
  gmail: {
    name: "Gmail",
    icon: <Mail className="h-5 w-5 text-workspace-red" />,
  },
  docs: {
    name: "Google Docs",
    icon: <FileText className="h-5 w-5 text-workspace-blue" />,
  },
  sheets: {
    name: "Google Sheets",
    icon: <Table className="h-5 w-5 text-workspace-green" />,
  },
  calendar: {
    name: "Google Calendar",
    icon: <Calendar className="h-5 w-5 text-workspace-blue" />,
  },
  forms: {
    name: "Google Forms",
    icon: <FileEdit className="h-5 w-5 text-workspace-yellow" />,
  },
  drive: {
    name: "Google Drive",
    icon: <HardDrive className="h-5 w-5 text-workspace-green" />,
  }
};

const products: Product[] = [
  {
    id: 1,
    icon: <Mail className="h-8 w-8 text-white" />,
    iconBg: "app-icon-gradient-blue",
    name: "Mail merge for workspace",
    description: "Send personalized emails to your contacts, include unique file attachments, track emails and schedule messages.",
    compatibleWith: [googleApps.gmail, googleApps.drive, googleApps.docs],
  },
  {
    id: 2,
    icon: <FileText className="h-8 w-8 text-white" />,
    iconBg: "app-icon-gradient-green",
    name: "Document studio",
    description: "Merge documents from data in Google Sheets and Forms. Automate contracts, invoices, agreements, and more.",
    compatibleWith: [googleApps.docs, googleApps.sheets, googleApps.forms, googleApps.drive],
  },
  {
    id: 3,
    icon: <Table className="h-8 w-8 text-white" />,
    iconBg: "app-icon-gradient-yellow",
    name: "Email sheets on schedule",
    description: "Automatically email Google Spreadsheet reports and dashboards on a recurring schedule to your team.",
    compatibleWith: [googleApps.sheets, googleApps.gmail],
  },
  {
    id: 4,
    icon: <FileEdit className="h-8 w-8 text-white" />,
    iconBg: "app-icon-gradient-red",
    name: "Forms notifications",
    description: "Send customized email notifications to form respondents and anyone else when someone submits your Google Form.",
    compatibleWith: [googleApps.forms, googleApps.gmail],
  },
  {
    id: 5,
    icon: <HardDrive className="h-8 w-8 text-white" />,
    iconBg: "app-icon-gradient-blue",
    name: "Drive auditor",
    description: "Run a complete security audit of your Google Drive and know who has access to your shared files and folders.",
    compatibleWith: [googleApps.drive],
  },
  {
    id: 6,
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    iconBg: "app-icon-gradient-green",
    name: "Save Gmail to Drive",
    description: "Auto-download email messages and file attachments from Gmail to your Drive.",
    compatibleWith: [googleApps.gmail, googleApps.drive],
  },
];

const ProductTable = () => {
  return (
    <div className="w-full overflow-auto">
      <div className="border rounded-xl overflow-hidden">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className="group border-b last:border-b-0 transition-colors hover:bg-gray-50 cursor-pointer"
          >
            <div className="p-6 flex items-start gap-6">
              <div className={`${product.iconBg} rounded-xl p-3 shrink-0`}>
                {product.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-medium text-workspace-dark mb-2">{product.name}</h3>
                <p className="text-muted-foreground pr-4">{product.description}</p>
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                {product.compatibleWith.map((app, appIndex) => (
                  <div key={appIndex} className="tooltip" data-tip={app.name}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                      {app.icon}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center text-workspace-blue group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
