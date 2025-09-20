import React, { useState } from 'react'
import './App.css'
import BookList from './components/book/BookList.tsx';
import type { Book } from './types/Book.ts';
import Cart from './components/cart/Cart.tsx';
import CheckoutDialog from './components/modals/CheckoutDialog.tsx';

function App() {
  const [cart, setCart] = useState<Book[]>([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const handleAddToCart = (book: Book) => {
    setCart((prevCart) => [...prevCart, book]);
  };
  const handleRemoveBook = (book: Book) => {
    setCart((prevCart) => prevCart.filter((b) => b.id !== book.id));
  }
  const handleCheckoutConfirm = (data: { name: string; address: string }) => {
    // simulate API call
    setTimeout(() => {
      alert(`Order placed by ${data.name}!\nBooks: ${cart.map(b => b.title).join(", ")}\nShipping to: ${data.address}`);
      setCart([]);
      setCheckoutOpen(false);
    }, 1000);
  };
    
  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Book Dashboard</h1>
      <BookList onAddToCart={handleAddToCart}/>
      <Cart items={cart} onRemoveBook={handleRemoveBook} onCheckout={() => setCheckoutOpen(true)}/>
      <CheckoutDialog onConfirm={handleCheckoutConfirm} onClose={() => setCheckoutOpen(false)} isOpen={isCheckoutOpen}/>
    </div>
  );
}

export default App
