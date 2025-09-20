import { useEffect, useState } from "react";
import type { Book } from "../../types/Book.ts";
import React from "react";
import BookCard from "./BookCard.tsx";
import { getBooks } from "../../services/books.ts";

interface BookListProps {
    onAddToCart?: (book: Book) => void;
}

function BookList({onAddToCart}: BookListProps) {
    const [books, setBooks] = useState<Book[]>([]);
    const [completeBooksList, setCompleteBooksList] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getBooks().then((fetchedBooks) => {
            setBooks(fetchedBooks);
            setCompleteBooksList(fetchedBooks);
            setLoading(false);
        })
        
    }, []);

    const onBookSearch = ((event: any) => {
        setLoading(true);
        const searchTerm: string = event.target.value.toLowerCase();
        if (!searchTerm) {
            getBooks().then(setBooks);
            setLoading(false);
            return;
        }
        const filteredBooks = completeBooksList.filter((book: Book) => {
            return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
        });
        setBooks(filteredBooks);
        setLoading(false);
    })

    return (
        <div>
          <h2>Available Books</h2>
          <input placeholder="Search for a book" style={{borderRadius: "10px"}} onChange={event => onBookSearch(event)}/>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {books.map((book) => (
              <BookCard key={book.id} book={book} onAddToCart={onAddToCart}/>
            ))}
          </div>
          {!books.length && !loading && <p>No books found 😭</p>}
          {loading && <p>Loading...</p>}
        </div>
      );
}

export default BookList;