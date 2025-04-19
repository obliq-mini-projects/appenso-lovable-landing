
"use client";

import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const WorkspaceLogo = () => (
  <svg width="54" height="32" viewBox="0 0 54 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8 1.12012H0V30.9868H12.8V22.4535H13.9733L18.7733 30.9868H33.28L24.0533 15.4135L32.64 1.12012H18.7733L13.9733 9.65345H12.8V1.12012Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M30.0784 12.9068C30.0792 12.9068 30.08 12.9068 30.08 11.2534C30.08 9.6001 30.0808 9.6001 30.0817 9.6001L30.0835 9.6001L30.0874 9.60011L30.0966 9.60017C30.1034 9.60022 30.1113 9.60031 30.1204 9.60046C30.1387 9.60075 30.1616 9.60127 30.189 9.60219C30.2436 9.60401 30.3162 9.6074 30.404 9.61367C30.5793 9.62619 30.8188 9.65042 31.1018 9.69759C31.6601 9.79064 32.4297 9.97981 33.2194 10.3746C34.0155 10.7727 34.862 11.3958 35.5057 12.3613C36.1563 13.3372 36.5333 14.5641 36.5333 16.0534C36.5333 17.5427 36.1563 18.7696 35.5057 19.7455C34.862 20.7111 34.0155 21.3341 33.2194 21.7322C32.4297 22.127 31.6601 22.3162 31.1018 22.4093C30.8188 22.4564 30.5793 22.4807 30.404 22.4932C30.3162 22.4995 30.2436 22.5029 30.189 22.5047C30.1616 22.5056 30.1387 22.5061 30.1204 22.5064C30.1113 22.5065 30.1034 22.5066 30.0966 22.5067L30.0874 22.5067L30.0835 22.5068L30.0817 22.5068C30.0808 22.5068 30.08 22.5068 30.08 20.8534C30.08 19.2001 30.0792 19.2001 30.0784 19.2001L30.077 19.2001L30.0744 19.2001L30.0704 19.2001L30.0671 19.2002C30.0673 19.2002 30.0713 19.2001 30.0788 19.1998C30.0945 19.1993 30.1251 19.198 30.1685 19.1949C30.2558 19.1887 30.3913 19.1754 30.5582 19.1476C30.8999 19.0906 31.3303 18.9798 31.7406 18.7746C32.1445 18.5727 32.498 18.2958 32.7543 17.9113C33.0037 17.5372 33.2267 16.9641 33.2267 16.0534C33.2267 15.1427 33.0037 14.5696 32.7543 14.1955C32.498 13.8111 32.1445 13.5341 31.7406 13.3322C31.3303 13.127 30.8999 13.0162 30.5582 12.9593C30.3913 12.9314 30.2558 12.9182 30.1685 12.9119C30.1251 12.9088 30.0945 12.9075 30.0788 12.907C30.0712 12.9068 30.0672 12.9067 30.0671 12.9067L30.0704 12.9067L30.0744 12.9068L30.077 12.9068L30.0784 12.9068Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M32.9585 7.89334C32.9592 7.89334 32.96 7.89334 32.96 6.24C32.96 4.58667 32.9608 4.58667 32.9617 4.58667L32.9637 4.58667L32.9683 4.58669L32.9801 4.58676C32.9891 4.58683 33.0005 4.58696 33.0142 4.58718C33.0415 4.58762 33.078 4.58843 33.1229 4.58993C33.2127 4.59292 33.3368 4.59866 33.4903 4.60962C33.7968 4.63151 34.2238 4.67449 34.7318 4.75916C35.7401 4.92721 37.1097 5.26639 38.4994 5.96122C39.8955 6.65928 41.342 7.73235 42.4357 9.3729C43.5363 11.0238 44.2133 13.1507 44.2133 15.84C44.2133 18.5293 43.5363 20.6562 42.4357 22.3071C41.342 23.9477 39.8955 25.0207 38.4994 25.7188C37.1097 26.4136 35.7401 26.7528 34.7318 26.9208C34.2238 27.0055 33.7968 27.0485 33.4903 27.0704C33.3368 27.0813 33.2127 27.0871 33.1229 27.0901C33.078 27.0916 33.0415 27.0924 33.0142 27.0928C33.0005 27.093 32.9891 27.0932 32.9801 27.0932L32.9683 27.0933L32.9637 27.0933L32.9617 27.0933C32.9608 27.0933 32.96 27.0933 32.96 25.44C32.96 23.7867 32.9592 23.7867 32.9585 23.7867L32.9552 23.7867L32.9539 23.7867C32.9544 23.7867 32.9567 23.7867 32.9609 23.7866C32.9699 23.7864 32.9874 23.7861 33.0127 23.7852C33.0635 23.7835 33.1457 23.7799 33.2547 23.7721C33.4733 23.7565 33.7963 23.7245 34.1882 23.6592C34.9799 23.5272 36.0103 23.2664 37.0206 22.7612C38.0245 22.2593 38.978 21.5323 39.6843 20.4729C40.3837 19.4238 40.9067 17.9507 40.9067 15.84C40.9067 13.7293 40.3837 12.2562 39.6843 11.2071C38.978 10.1477 38.0245 9.42072 37.0206 8.91879C36.0103 8.41362 34.9799 8.15279 34.1882 8.02084C33.7963 7.95552 33.4733 7.92349 33.2547 7.90788C33.1457 7.9001 33.0635 7.89646 33.0127 7.89476C32.9874 7.89392 32.9699 7.89356 32.9609 7.89341C32.9564 7.89334 32.954 7.89332 32.9538 7.89332Z" fill="black"/>
  </svg>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <WorkspaceLogo />
          </Link>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Apps</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[600px] p-4">
                <div className="grid grid-cols-1 gap-4">
                  <Link to="/apps/mail-merge" className="flex items-start p-4 rounded-lg hover:bg-gray-50">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <img src="https://cdn.prod.website-files.com/618c02dab4dadff78f3a8b70/65e98b6f6de04db715f6409c_Kaching%20Bundle%20Quantity%20Breaks.webp" alt="Mail Merge" className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Mail Merge</h3>
                      <p className="text-sm text-gray-500">Send personalized emails with unique attachments</p>
                    </div>
                  </Link>
                  
                  <Link to="/apps/document-studio" className="flex items-start p-4 rounded-lg hover:bg-gray-50">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <img src="https://cdn.prod.website-files.com/618c02dab4dadff78f3a8b70/65e98b6ff9fe40fa38db7aab_Kaching%20Post%20Purchase%20Upsell.webp" alt="Document Studio" className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Document Studio</h3>
                      <p className="text-sm text-gray-500">Create and manage documents with ease</p>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/case-studies" className="text-sm px-4 py-2">
                Case studies
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/about" className="text-sm px-4 py-2">
                About
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/blog" className="text-sm px-4 py-2">
                Blog
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block text-sm font-medium hover:text-gray-600">
            Contact Sales
          </Link>
          <Link to="/get-started" className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Get Started
          </Link>
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
