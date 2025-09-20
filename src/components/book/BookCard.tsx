import React from "react";
import type { Book } from "../../types/Book.ts";

interface BookCardProps {
    book: Book;
    onAddToCart?: (book: Book) => void;
}
function BookCard({book, onAddToCart}: BookCardProps) {
    return (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "5px",
            borderRadius: "8px",
          }}
        >
          <h3>{book.title}</h3>
          <p>by {book.author}</p>
          <button type="button" onClick={() => onAddToCart && onAddToCart(book)}>Add to cart</button>
        </div>
      );
}

export default BookCard;