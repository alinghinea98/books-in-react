import { createContext, ReactNode, useContext, useState } from "react";
import type { Book } from "../types/Book.ts";

interface CartContextType {
    cart: Book[];
    addToCart: (book: Book) => void;
    removeFromCart: (book: Book) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Book[]>([]);

    const addToCart = (book: Book) => setCart((prev) => [...prev, book]);
    const removeFromCart = (book: Book) =>
        setCart((prev) => prev.filter((b) => b.id !== book.id));
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
          value={{ cart, addToCart, removeFromCart, clearCart }}
        >
          {children}
        </CartContext.Provider>
      );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}