import { useState } from "react";
import BooksList from "./BooksList";
import booksInLibrary from "../data";
import AddBook from "./AddBook";

const Books = () => {
  const [books, setBooks] = useState(booksInLibrary);
  const [showBooks, setShowBooks] = useState(false);
  const addBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    updatedBooks.sort((a, b) => {
      if (a.author === b.author) {
        if (a.title === b.title) {
          return (
            parseInt(a.yearOfPublishment, 10) -
            parseInt(b.yearOfPublishment, 10)
          );
        } else {
          return a.title.localeCompare(b.title);
        }
      } else {
        return a.author.localeCompare(b.author);
      }
    });

    setBooks(updatedBooks);
  };
  const handleShowBooks = () => {
    setShowBooks(!showBooks);
  };

  return (
    <div>
      <button onClick={handleShowBooks}>
        {showBooks ? "Sakri knjige" : "Prikazi sve knjige u knjiznici"}
      </button>
      {showBooks && <BooksList books={books} />}
      <AddBook onAddBook={addBook} />
    </div>
  );
};

export default Books;
