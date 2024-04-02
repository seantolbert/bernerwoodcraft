// src/components/ProductCard.tsx

import React from 'react';
import { Product } from '../types/Product'; // Adjust the import path as necessary
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-md p-4 m-2">
      <Link to={`/products/${product.id}`} className="text-lg font-bold">{product.name}</Link>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      {/* Optionally display images if available */}
      {product.images && product.images[0] && (
        <img src={product.images[0]} alt={product.name} className="mt-2 max-h-40" />
      )}
    </div>
  );
};

export default ProductCard;
