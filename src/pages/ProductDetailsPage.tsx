import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

const ProductDetailsPage: React.FC = () => {
  const { addItem } = useCart();

  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

const handleAddToCart = () => {
  // define the product to add
  const productToAdd = {
    productId: 
  }
} 

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({
          id: docSnap.id,
          ...(docSnap.data() as Omit<Product, "id">),
        });
      } else {
        console.log("no such product bro!");
      }
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-md mt-2">{product.description}</p>
      <p className="mt-4">Price: ${product.price}</p>
      {/* Display materials if available */}
      {product.materials && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Materials</h2>
          <ul>
            {product.materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Display images if available */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Images</h2>
        <div className="flex space-x-4 mt-2">
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="max-h-40 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
