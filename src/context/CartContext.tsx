import React, { useState, useContext, createContext, ReactNode } from "react";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productID: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      // check if item is already in the cart
      const itemIndex = prevItems.findIndex(
        (item) => item.productId === newItem.productId
      );
      if (itemIndex > -1) {
        // update quantity if item DOES exist
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // add new item to cart
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };
  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within the cartProvider");
  }
  return context;
};
