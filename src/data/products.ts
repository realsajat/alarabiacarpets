
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
  }
];

// More product categories can be added here as needed
