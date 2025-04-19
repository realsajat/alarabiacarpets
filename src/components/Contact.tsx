
import { MessageSquare, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+97412345678", "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  For inquiries about our products or services, reach out to us through any of these channels:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" />
                    <span>+974 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" />
                    <span>info@company.qa</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full py-6"
                >
                  <MessageSquare className="mr-2" />
                  Contact Us on WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
