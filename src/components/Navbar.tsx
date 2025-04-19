
import { MessageSquare, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+97412345678", "_blank");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary">Qatar Furnish</h1>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <a href="#products" className="block p-2 hover:bg-accent rounded-md">
                          All Products
                        </a>
                      </li>
                      <li>
                        <a href="#barkia" className="block p-2 hover:bg-accent rounded-md">
                          Barkia & PVC Barkia
                        </a>
                      </li>
                      <li>
                        <a href="#carpets" className="block p-2 hover:bg-accent rounded-md">
                          Carpets & Grass Carpets
                        </a>
                      </li>
                      <li>
                        <a href="#sofas" className="block p-2 hover:bg-accent rounded-md">
                          Sofas & Majlis
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#services" className="block p-2">
                    Services
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#contact" className="block p-2">
                    Contact
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white"
          >
            <MessageSquare className="mr-2" />
            Contact on WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
