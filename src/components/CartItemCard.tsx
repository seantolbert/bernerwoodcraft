import React from "react";

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
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div>{/* Implement increase/decrease functions if needed */}</div>
    </div>
  );
};

export default CartItemCard;
