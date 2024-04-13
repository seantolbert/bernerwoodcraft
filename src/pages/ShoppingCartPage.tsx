// src/pages/CartPage.tsx

import React from 'react';
import { useCart } from '@/hooks/useCart';
import CartItemCard from '../components/CartItemCard'; // Adjust the import path as needed

const ShoppingCartPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div>
            {cartItems.map((item) => (
              <CartItemCard key={item.productId} item={item} />
            ))}
          </div>
          <div className="mt-4">
            <p className="font-bold">Total: ${calculateTotal().toFixed(2)}</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCartPage;
