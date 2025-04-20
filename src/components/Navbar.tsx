import { MessageSquare, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const isMobile = useIsMobile();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+97455512858", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const NavItems = () => (
    <>
      <Button 
        variant="ghost"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Home
      </Button>
      <Button 
        variant="ghost"
        onClick={() => scrollToSection('products')}
      >
        Products
      </Button>
      <Button 
        variant="ghost"
        onClick={() => scrollToSection('services')}
      >
        Services
      </Button>
      <Button 
        variant="ghost"
        onClick={() => scrollToSection('contact')}
      >
        Contact
      </Button>
    </>
  );

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Al Arabia Carpets</h1>
          
          {isMobile ? (
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col gap-4 mt-8">
                    <NavItems />
                  </div>
                </SheetContent>
              </Sheet>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                size="sm"
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4">
                <NavItems />
              </div>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                <MessageSquare className="mr-2" />
                Contact on WhatsApp
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
