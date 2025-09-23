import { useState } from "react";
import BookList from "../components/book/BookList.tsx";
import Cart from "../components/cart/Cart.tsx";
import AntCheckoutDialog from "../components/modals/AntCheckoutDialog.tsx";
import React from "react";
import { useCart } from "../contexts/CartContext.tsx";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { cartAtom } from "../state/cartAtom.ts";


function BooksPage() {
  const cart = useRecoilValue(cartAtom);
  const resetCart = useResetRecoilState(cartAtom);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const handleCheckoutConfirm = (data: { name: string; address: string }) => {
    setTimeout(() => {
      alert(
        `Order placed by ${data.name}!\nBooks: ${cart
          .map((b) => b.title)
          .join(", ")}\nShipping to: ${data.address}`
      );
      resetCart(); // golește cart-ul
      setCheckoutOpen(false);
    }, 1000);
  };

  return (
    <div>
      <h2>Books</h2>
      <BookList/>
      <Cart onCheckout={() => setCheckoutOpen(true)} />
      <AntCheckoutDialog
        isOpen={isCheckoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onConfirm={handleCheckoutConfirm}
      />
    </div>
  );
}

export default BooksPage;
