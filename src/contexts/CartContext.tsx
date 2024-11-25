import { createContext, useState, ReactNode, useContext } from 'react';

// Setting the type for the cart context
type CartContextType = {
  totalItems: number; 
  incrementItem: () => void;
  decrementItem: () => void;
  addItem: () => void;
};

// Creating a context for the cart, which will provide the values ​​and functions
const CartContext = createContext<CartContextType | undefined>(undefined);

// Component that will wrap the application and provide context for its children
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [totalItems, setTotalItems] = useState(0);

  const incrementItem = () => setTotalItems((prev) => prev + 1);
  const decrementItem = () => setTotalItems((prev) => Math.max(prev - 1, 0));
  const addItem = () => setTotalItems((prev) => prev + 1);

  return (
    <CartContext.Provider value={{ totalItems, incrementItem, decrementItem, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};