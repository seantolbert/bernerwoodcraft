// src/components/ProductsList.tsx

import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import ProductCard from './ProductCard';
import { Product } from '../types/Product'; // Adjust the import path as necessary

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      })) as Product[];
      setProducts(productsData);
    };

    fetchProducts();
  }, [db]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
