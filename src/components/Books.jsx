import { useState } from "react";
import BooksList from "./BooksList";
import booksInLibrary from "../data";
import AddBook from "./AddBook";
import Search from "./Search";

const Books = () => {
  const [books, setBooks] = useState(booksInLibrary);
  const [showBooks, setShowBooks] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
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

  const loanBook = (uuid) => {
    const updatedBookList = books.map((book) => {
      if (book.uuid === uuid)
        return {
          ...book,
          numberOfAvailableCopies: book.numberOfAvailableCopies - 1,
        };

      return book;
    });
    setBooks(updatedBookList);
  };
  const returnBook = (uuid) => {
    const updatedBooksList = books.map((book) => {
      if (book.uuid === uuid)
        return {
          ...book,
          numberOfAvailableCopies: book.numberOfAvailableCopies + 1,
        };

      return book;
    });
    setBooks(updatedBooksList);
  };
  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchQuery.toLocaleLowerCase());
  });

  return (
    <div>
      <button onClick={handleShowBooks}>
        {showBooks ? "Sakri knjige" : "Prikazi sve knjige u knjiznici"}
      </button>
      {showBooks && (
        <BooksList books={books} returnBook={returnBook} loanBook={loanBook} />
      )}
      <AddBook onAddBook={addBook} />
      <Search
        books={books}
        query={searchQuery}
        onQueryChange={setSearchQuery}
        returnBook={returnBook}
        loanBook={loanBook}
      />
    </div>
  );
};

export default Books;
