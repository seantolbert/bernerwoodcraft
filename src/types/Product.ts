export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    materials: string[];
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
    images: string[];
    inStock: boolean;
    createdAt: Date;
    updatedAt?: Date;
  }