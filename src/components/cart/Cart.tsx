import React from "react";
import type { Book } from "../../types/Book.ts";
import { useRecoilState } from "recoil";
import { cartAtom } from "../../state/cartAtom.ts";

function Cart({ onCheckout }: { onCheckout?: () => void }) {
    const [cart, setCart] = useRecoilState(cartAtom);
    const removeFromCart = (bookId: number) => {
        setCart((prev) => prev.filter((b) => b.id !== bookId));
    };
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
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((book: Book) => (
                            <li key={book.id} style={{
                                display: "flex",
                                gap: "10px"
                            }}>
                                {book.title} – {book.author}
                                <p style={{ cursor: "pointer" }} onClick={() => removeFromCart && removeFromCart(book.id)}>❌</p>
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
