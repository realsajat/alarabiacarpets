
import { Card } from "@/components/ui/card";
import { sofa } from "@/data/products";

const Products = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden group">
              <div className="aspect-square relative">
                <img 
                  src="public/placeholder.svg"
                  alt="Product"
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Classic Majlis Set</h3>
                <p className="text-gray-600 mb-4">
                  Traditional Qatari majlis design with modern comfort
                </p>
                <a 
                  href="https://wa.me/+97412345678"
                  target="_blank"
                  className="text-primary hover:text-primary/80"
                >
                  Inquire on WhatsApp →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
