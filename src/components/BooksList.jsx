const BooksList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div className="book" key={book.uuid}>
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
        </div>
      ))}
    </div>
  );
};

export default BooksList;
