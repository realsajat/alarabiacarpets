
import { Card } from "@/components/ui/card";
import { Sofa, Carpet, Curtain } from "lucide-react";

const categories = [
  {
    title: "Barkia & PVC Barkia",
    icon: Sofa,
    description: "Premium quality Barkia for your home",
  },
  {
    title: "Carpets & Grass Carpets",
    icon: Carpet,
    description: "Luxurious carpets for every space",
  },
  {
    title: "Sofas & Majlis",
    icon: Sofa,
    description: "Traditional and modern seating solutions",
  },
  {
    title: "Curtains & Rollers",
    icon: Curtain,
    description: "Elegant window treatments",
  },
];

const ProductCategories = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
              <category.icon className="w-12 h-12 text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">{category.title}</h3>
              <p className="text-gray-600 text-center">{category.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
