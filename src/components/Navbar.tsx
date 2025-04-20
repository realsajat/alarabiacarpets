
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <h1 className="text-2xl font-bold text-primary">Qatar Furnish</h1>
          
          <div className="flex items-center gap-4">
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
