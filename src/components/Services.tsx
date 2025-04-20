import { Card } from "@/components/ui/card";
import { Truck, Wrench, HelpCircle, Headphones } from "lucide-react";

const Services = () => {
  return (
    <div id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 text-center">
            <Truck className="w-16 h-16 text-secondary mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Free Delivery</h3>
            <p className="text-gray-600">
              We offer complimentary delivery services across Qatar
            </p>
          </Card>
          <Card className="p-8 text-center">
            <Wrench className="w-16 h-16 text-secondary mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Free Installation</h3>
            <p className="text-gray-600">
              Professional installation included with your purchase
            </p>
          </Card>
          <Card className="p-8 text-center">
            <HelpCircle className="w-16 h-16 text-secondary mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Product Consultation</h3>
            <p className="text-gray-600">
              Expert advice to help you make the best furniture choices
            </p>
          </Card>
          <Card className="p-8 text-center">
            <Headphones className="w-16 h-16 text-secondary mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">After-sales Support</h3>
            <p className="text-gray-600">
              Dedicated support to ensure your complete satisfaction
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
