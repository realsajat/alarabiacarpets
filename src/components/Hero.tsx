
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+97412345678", "_blank");
  };

  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-primary/90 to-primary flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">Premium Home Furnishing Solutions in Qatar</h1>
          <p className="text-xl mb-8">
            Discover our exclusive collection of Barkia, carpets, sofas, and more. 
            Enjoy free installation and delivery across Qatar.
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-6 text-lg rounded-full flex items-center gap-2"
          >
            <MessageSquare className="w-6 h-6" />
            Contact Us on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
