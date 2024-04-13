import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // function to sync cart with firebase
  const syncCart = useCallback(
    async (updatedCartItems: CartItem[]) => {
      const user = auth.currentUser;
      if (user) {
        await setDoc(
          doc(db, "users", user.uid),
          { cart: updatedCartItems },
          { merge: true }
        );
      }
    },
    [auth, db]
  );

  // cart manipulation functions
  const addToCart = (item: CartItem) => {
    const newCartItems = [...cartItems];
    const existingItemIndex = newCartItems.findIndex(
      (ci) => ci.productId === item.productId
    );
    if (existingItemIndex !== -1) {
      newCartItems[existingItemIndex].quantity += item.quantity;
    } else {
      newCartItems.push(item);
    }
    setCartItems(newCartItems);
    syncCart(newCartItems);
  };

  const removeFromCart = (productId: string) => {
    const newCartItems = cartItems.filter(
      (item) => item.productId !== productId
    );
    setCartItems(newCartItems);
    syncCart(newCartItems);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const newCartItems = cartItems.map((item) =>
      item.productId === productId ? { ...item, quantity } : item
    );
    setCartItems(newCartItems);
    syncCart(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    syncCart([]);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then((docSnap) => {
          if (docSnap.exists() && docSnap.data().cart) {
            setCartItems(docSnap.data().cart);
          }
        });
      } else {
        setCartItems([]);
      }
    });
    return () => unsub();
  }, [auth, db]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must bve used within a CartProvider");
  }
  return context;
};
