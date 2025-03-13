
import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { File, FileText, Mail, ShoppingBag, Calendar, MessageSquare, Image, FileImage, Video, Map, BarChart } from "lucide-react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const AppListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode; iconClass?: string; compatibleWith?: React.ReactNode[] }
>(({ className, title, children, icon, iconClass, compatibleWith, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className={cn("app-icon mr-4", iconClass)}>{icon}</div>
          <div className="space-y-1 flex-1">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          </div>
          {compatibleWith && compatibleWith.length > 0 && (
            <div className="flex items-center gap-1.5 ml-2">
              {compatibleWith}
            </div>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
AppListItem.displayName = "AppListItem";

const Header = () => {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-background/80">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold bg-gradient-to-r from-workspace-blue to-workspace-green bg-clip-text text-transparent font-poppins">Workspace</span>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-poppins" onClick={scrollToProducts}>Products</NavigationMenuTrigger>
              <NavigationMenuContent className="w-screen max-w-screen-lg mx-auto">
                <div className="grid grid-cols-2 gap-4 p-6">
                  <AppListItem
                    title="Mail merge for workspace"
                    icon={<Mail className="text-white" size={20} />}
                    iconClass="app-icon-gradient-blue"
                    href="#"
                    compatibleWith={[
                      <div key="gmail" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Gmail">
                        <Mail className="h-4 w-4 text-workspace-red" />
                      </div>,
                      <div key="drive" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Drive">
                        <HardDrive className="h-4 w-4 text-workspace-green" />
                      </div>,
                      <div key="docs" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Docs">
                        <FileText className="h-4 w-4 text-workspace-blue" />
                      </div>
                    ]}
                  >
                    Send personalized emails to your contacts, include unique file attachments, track emails and schedule messages.
                  </AppListItem>
                  <AppListItem
                    title="Document studio"
                    icon={<FileText className="text-white" size={20} />}
                    iconClass="app-icon-gradient-green"
                    href="#"
                    compatibleWith={[
                      <div key="docs" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Docs">
                        <FileText className="h-4 w-4 text-workspace-blue" />
                      </div>,
                      <div key="sheets" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Sheets">
                        <Table className="h-4 w-4 text-workspace-green" />
                      </div>,
                      <div key="forms" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Forms">
                        <FileEdit className="h-4 w-4 text-workspace-yellow" />
                      </div>,
                      <div key="drive" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Drive">
                        <HardDrive className="h-4 w-4 text-workspace-green" />
                      </div>
                    ]}
                  >
                    Merge documents from data in Google Sheets and Forms. Automate contracts, invoices, agreements, and more.
                  </AppListItem>
                  <AppListItem
                    title="Email sheets on schedule"
                    icon={<Table className="text-white" size={20} />}
                    iconClass="app-icon-gradient-yellow"
                    href="#"
                    compatibleWith={[
                      <div key="sheets" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Sheets">
                        <Table className="h-4 w-4 text-workspace-green" />
                      </div>,
                      <div key="gmail" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Gmail">
                        <Mail className="h-4 w-4 text-workspace-red" />
                      </div>
                    ]}
                  >
                    Automatically email Google Spreadsheet reports and dashboards on a recurring schedule to your team.
                  </AppListItem>
                  <AppListItem
                    title="Forms notifications"
                    icon={<FileEdit className="text-white" size={20} />}
                    iconClass="app-icon-gradient-red"
                    href="#"
                    compatibleWith={[
                      <div key="forms" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Forms">
                        <FileEdit className="h-4 w-4 text-workspace-yellow" />
                      </div>,
                      <div key="gmail" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Gmail">
                        <Mail className="h-4 w-4 text-workspace-red" />
                      </div>
                    ]}
                  >
                    Send customized email notifications to form respondents and anyone else when someone submits your Google Form.
                  </AppListItem>
                  <AppListItem
                    title="Drive auditor"
                    icon={<HardDrive className="text-white" size={20} />}
                    iconClass="app-icon-gradient-blue"
                    href="#"
                    compatibleWith={[
                      <div key="drive" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Drive">
                        <HardDrive className="h-4 w-4 text-workspace-green" />
                      </div>
                    ]}
                  >
                    Run a complete security audit of your Google Drive and know who has access to your shared files and folders.
                  </AppListItem>
                  <AppListItem
                    title="Save Gmail to Drive"
                    icon={<CheckCircle className="text-white" size={20} />}
                    iconClass="app-icon-gradient-green"
                    href="#"
                    compatibleWith={[
                      <div key="gmail" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Gmail">
                        <Mail className="h-4 w-4 text-workspace-red" />
                      </div>,
                      <div key="drive" className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100" title="Google Drive">
                        <HardDrive className="h-4 w-4 text-workspace-green" />
                      </div>
                    ]}
                  >
                    Auto-download email messages and file attachments from Gmail to your Drive.
                  </AppListItem>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium hover:underline font-poppins">Contact Sales</a>
          <a href="#" className="rounded-full bg-workspace-blue/90 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-workspace-blue transition-colors font-poppins">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
