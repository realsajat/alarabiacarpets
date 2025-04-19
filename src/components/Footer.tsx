
import { WhatsApp, Phone, Mail } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+97412345678", "_blank");
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 hover:text-secondary"
              >
                <WhatsApp className="w-5 h-5" />
                WhatsApp
              </button>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +974 1234 5678
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@company.qa
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>Barkia & PVC Barkia</li>
              <li>Carpets & Grass Carpets</li>
              <li>Sofas & Majlis</li>
              <li>Curtains & Rollers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Free Delivery</li>
              <li>Free Installation</li>
              <li>Product Consultation</li>
              <li>After-sales Support</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
