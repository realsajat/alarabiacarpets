
// Define product types
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Sample product data
export const sofa: Product[] = [
  {
    id: 1,
    name: "Classic Majlis Set",
    description: "Traditional Qatari majlis design with modern comfort",
    image: "/Classic Majlis Set.svg"
  },
  {
    id: 2,
    name: "Modern Sofa Collection",
    description: "Contemporary design with premium materials",
    image: "/Modern Sofa Collection.svg"
  },
  {
    id: 3,
    name: "Premium Barkia Set",
    description: "Luxurious Barkia with elegant finishing",
    image: "/Premium Barkia Set.svg"
  },
  {
    id: 4,
    name: "Designer Corner Sofa",
    description: "Elegant L-shaped sofa perfect for modern homes",
    image: "/Designer Corner Sofa.svg"
  },
  {
    id: 5,
    name: "Executive Majlis Collection",
    description: "High-end majlis set with premium upholstery",
    image: "/Executive Majlis Collection.svg"
  },
  {
    id: 6,
    name: "Luxury Recliner Set",
    description: "Comfortable recliners with premium leather finish",
    image: "/Luxury Recliner Set.svg"
  }
];

// More product categories can be added here as needed
