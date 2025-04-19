import { MessageSquare } from "lucide-react";
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
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
                        <button 
                          onClick={() => scrollToSection('products')} 
                          className="block w-full text-left p-2 hover:bg-accent rounded-md"
                        >
                          All Products
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => scrollToSection('barkia')} 
                          className="block w-full text-left p-2 hover:bg-accent rounded-md"
                        >
                          Barkia & PVC Barkia
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => scrollToSection('carpets')} 
                          className="block w-full text-left p-2 hover:bg-accent rounded-md"
                        >
                          Carpets & Grass Carpets
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => scrollToSection('sofas')} 
                          className="block w-full text-left p-2 hover:bg-accent rounded-md"
                        >
                          Sofas & Majlis
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="block p-2"
                  >
                    Services
                  </button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="block p-2"
                  >
                    Contact
                  </button>
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
