import React from "react";
import { useCart } from "@/context/CartContext";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div>
        {/* Implement increase/decrease functions if needed */}
        <button
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors"
          onClick={() => removeItem(item.productId)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
