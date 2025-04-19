
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
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Modern Sofa Collection",
    description: "Contemporary design with premium materials",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Premium Barkia Set",
    description: "Luxurious Barkia with elegant finishing",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Designer Corner Sofa",
    description: "Elegant L-shaped sofa perfect for modern homes",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Executive Majlis Collection",
    description: "High-end majlis set with premium upholstery",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Luxury Recliner Set",
    description: "Comfortable recliners with premium leather finish",
    image: "/placeholder.svg"
  }
];

// More product categories can be added here as needed
