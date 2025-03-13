
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="section-container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="text-xl font-semibold bg-gradient-to-r from-workspace-blue to-workspace-green bg-clip-text text-transparent mb-4">Workspace</div>
            <p className="text-muted-foreground max-w-xs">
              A better way to work together. Connect, create, and collaborate seamlessly.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Docs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Sheets</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Slides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Mail</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Meet</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Partners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2023 Workspace. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-workspace-blue transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
