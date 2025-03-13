
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
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode; iconClass?: string }
>(({ className, title, children, icon, iconClass, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none space-x-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className={cn("app-icon", iconClass)}>{icon}</div>
          <div className="space-y-1">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
AppListItem.displayName = "AppListItem";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-background/80">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold bg-gradient-to-r from-workspace-blue to-workspace-green bg-clip-text text-transparent">Workspace</span>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                  <AppListItem
                    title="Docs"
                    icon={<FileText className="text-white" size={20} />}
                    iconClass="app-icon-gradient-blue"
                    href="#"
                  >
                    Create and edit documents online
                  </AppListItem>
                  <AppListItem
                    title="Sheets"
                    icon={<BarChart className="text-white" size={20} />}
                    iconClass="app-icon-gradient-green"
                    href="#"
                  >
                    Spreadsheets with real-time collaboration
                  </AppListItem>
                  <AppListItem
                    title="Slides"
                    icon={<Image className="text-white" size={20} />}
                    iconClass="app-icon-gradient-yellow"
                    href="#"
                  >
                    Create beautiful presentations together
                  </AppListItem>
                  <AppListItem
                    title="Mail"
                    icon={<Mail className="text-white" size={20} />}
                    iconClass="app-icon-gradient-red"
                    href="#"
                  >
                    Secure and private email for business
                  </AppListItem>
                  <AppListItem
                    title="Calendar"
                    icon={<Calendar className="text-white" size={20} />}
                    iconClass="app-icon-gradient-blue"
                    href="#"
                  >
                    Schedule and manage your meetings
                  </AppListItem>
                  <AppListItem
                    title="Meet"
                    icon={<Video className="text-white" size={20} />}
                    iconClass="app-icon-gradient-green"
                    href="#"
                  >
                    Secure video meetings for teams
                  </AppListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <ListItem
                    title="For Business"
                    href="#"
                  >
                    Enterprise-grade solutions for organizations of all sizes
                  </ListItem>
                  <ListItem
                    title="For Education"
                    href="#"
                  >
                    Free tools designed for teaching and learning
                  </ListItem>
                  <ListItem
                    title="For Small Teams"
                    href="#"
                  >
                    Collaborate and grow with flexible workspace solutions
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Pricing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <ListItem
                    title="Business Standard"
                    href="#"
                  >
                    $12 per user/month with business email and 2TB cloud storage
                  </ListItem>
                  <ListItem
                    title="Business Plus"
                    href="#"
                  >
                    $18 per user/month with enhanced security and management controls
                  </ListItem>
                  <ListItem
                    title="Enterprise"
                    href="#"
                  >
                    Custom pricing with premium security and full-service support
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium hover:underline">Contact Sales</a>
          <a href="#" className="rounded-full bg-workspace-blue/90 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-workspace-blue transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
