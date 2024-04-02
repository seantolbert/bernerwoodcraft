import { Product } from "../types/Product";

export const cuttingBoards: Product[] = [
  {
    id: "cb001",
    name: "Classic Maple Cutting Board",
    description:
      "A timeless cutting board made from premium maple, perfect for daily kitchen tasks.",
    price: 35.0,
    category: "Cutting Boards",
    materials: ["Maple"],
    dimensions: {
      length: 16,
      width: 10,
      height: 0.75,
    },
    images: [],
    inStock: true,
    createdAt: new Date("2023-03-01"),
  },
  {
    id: "cb002",
    name: "erie Board",
    description:
      "Elegant walnut charcuterie board, ideal for entertaining guests with your favorite cheeses and meats.",
    price: 45.0,
    category: "Cutting Boards",
    materials: ["Walnut"],
    dimensions: {
      length: 20,
      width: 12,
      height: 0.75,
    },
    images: [],
    inStock: true,
    createdAt: new Date("2023-03-02"),
  },
  {
    id: "cb003",
    name: "Cherry End-Grain Cutting Board",
    description:
      "Durable and beautiful, this end-grain cutting board made from cherry wood is a kitchen must-have for any chef.",
    price: 50.0,
    category: "Cutting Boards",
    materials: ["Cherry"],
    dimensions: {
      length: 18,
      width: 12,
      height: 1,
    },
    images: [],
    inStock: true,
    createdAt: new Date("2023-03-03"),
  },
  {
    id: "cb004",
    name: "Bamboo Cutting Board with Juice Groove",
    description:
      "Eco-friendly bamboo cutting board featuring a juice groove to keep your counters clean and tidy.",
    price: 25.0,
    category: "Cutting Boards",
    materials: ["Bamboo"],
    dimensions: {
      length: 15,
      width: 10,
      height: 0.75,
    },
    images: [],
    inStock: true,
    createdAt: new Date("2023-03-04"),
  },
  {
    id: "cb005",
    name: "Acacia Reversible Cutting Board",
    description:
      "Versatile and reversible cutting board, crafted from acacia for long-lasting use and aesthetic appeal.",
    price: 40.0,
    category: "Cutting Boards",
    materials: ["Acacia"],
    dimensions: {
      length: 18,
      width: 12,
      height: 0.75,
    },
    images: [],
    inStock: true,
    createdAt: new Date("2023-03-05"),
  },
  {
    id: "cb006",
    name: "Mixed Wood Design Cutting Board",
    description:
      "A striking cutting board featuring a mix of wood types for a unique, artistic kitchen accessory.",
    price: 55.0,
    category: "Cutting Boards",
    materials: ["Maple", "Walnut", "Cherry"],
    dimensions: {
      length: 20,
      width: 14,
      height: 1,
    },
    images: [],
    inStock: true,
    createdAt: new Date("2023-03-06"),
  },
];
