import { useState } from "react";
import BookList from "../components/book/BookList.tsx";
import Cart from "../components/cart/Cart.tsx";
import AntCheckoutDialog from "../components/modals/AntCheckoutDialog.tsx";
import type { Book } from "../types/Book.ts";
import React from "react";

function BooksPage() {
  const [cart, setCart] = useState<Book[]>([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const handleAddToCart = (book: Book) => setCart((prev) => [...prev, book]);
  const handleRemoveBook = (book: Book) =>
    setCart((prev) => prev.filter((b) => b.id !== book.id));

  const handleCheckoutConfirm = (data: { name: string; address: string }) => {
    setTimeout(() => {
      alert(
        `Order placed by ${data.name}!\nBooks: ${cart
          .map((b) => b.title)
          .join(", ")}\nShipping to: ${data.address}`
      );
      setCart([]);
      setCheckoutOpen(false);
    }, 1000);
  };

  return (
    <div>
      <h2>Books</h2>
      <BookList onAddToCart={handleAddToCart} />
      <Cart
        items={cart}
        onRemoveBook={handleRemoveBook}
        onCheckout={() => setCheckoutOpen(true)}
      />
      <AntCheckoutDialog
        isOpen={isCheckoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onConfirm={handleCheckoutConfirm}
      />
    </div>
  );
}

export default BooksPage;
