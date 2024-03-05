const BooksList = ({ books, returnBook, loanBook }) => {
  return (
    <div className="book_list">
      {books.map((book) => (
        <div
          className={`book ${
            book.numberOfAvailableCopies === 0 ? "disabled" : ""
          }`}
          key={book.uuid}
        >
          <div className="book_content">
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            <div className="publisherAndYearOfPublishment">
              {book.publisher}, {book.yearOfPublishment}
            </div>
            <div className="genre">{book.genre}</div>
            <div className="numberOfAvailableCopies">
              Za posudbu:
              {book.numberOfAvailableCopies}
            </div>

            <div className="returnAndLoanButtons">
              <button
                className="loanBook"
                onClick={() => loanBook(book.uuid)}
                disabled={book.numberOfAvailableCopies < 1}
              >
                Posudi
              </button>
              <button
                className="returnBook"
                onClick={() => returnBook(book.uuid)}
              >
                Vrati
              </button>
            </div>
          </div>
          <div className="book_cover">
            <img src={book.bookCover} alt={book.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
