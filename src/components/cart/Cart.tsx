import React from "react";
import type { Book } from "../../types/Book.ts";
import { useCart } from "../../contexts/CartContext.tsx";

interface CartProps {
    items: Book[];
    onRemoveBook?: (book: Book) => void;
    onCheckout?: () => void;
}

function Cart({ items, onRemoveBook, onCheckout }: CartProps) {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div
            style={{
                marginTop: "20px",
                padding: "10px",
                border: "1px solid #aaa",
                borderRadius: "8px",
            }}
        >
            <h2>🛒 Cart</h2>
            {items.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <>
                    <ul>
                        {items.map((book) => (
                            <li key={book.id} style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                {book.title} – {book.author}
                                <p style={{ cursor: "pointer" }} onClick={() => removeFromCart && removeFromCart(book)}>❌</p>
                            </li>
                        ))}
                    </ul>
                    <button type="button" style={{ marginTop: "10px" }} onClick={onCheckout}>
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;
