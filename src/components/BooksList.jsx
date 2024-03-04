import { useState } from "react";

const BooksList = ({ books, returnBook, loanBook }) => {
  return (
    <div>
      {books.map((book) => (
        <div
          className={`book ${
            book.numberOfAvailableCopies === 0 ? "disabled" : ""
          }`}
          key={book.uuid}
        >
          <div className="title">{book.title}</div>
          <div className="author">{book.author}</div>
          <div className="publisher">{book.publisher}</div>
          <div className="yearOfPublishment">{book.yearOfPublishment}</div>
          <div className="genre">{book.genre}</div>
          <img src={book.photo} alt="" />
          <div className="numberOfAvailableCopies">
            Broj primjeraka:
            {book.numberOfAvailableCopies}
          </div>
          <button
            className="loanBook"
            onClick={() => loanBook(book.uuid)}
            disabled={book.numberOfAvailableCopies < 1}
          >
            Posudi
          </button>
          <button className="returnBook" onClick={() => returnBook(book.uuid)}>
            Vrati
          </button>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
