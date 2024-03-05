import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddBook = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookCover, setBookCover] = useState("");
  const [publisher, setPublisher] = useState("");
  const [yearOfPublishment, setYearOfPublishment] = useState("");
  const [genre, setGenre] = useState("Roman");
  const [numberOfAvailableCopies, setNumberOfAvailableCopies] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      uuid: uuidv4(),
      title,
      author,
      bookCover,
      publisher,
      yearOfPublishment,
      genre,
      numberOfAvailableCopies,
    };
    setTitle("");
    setAuthor("");
    setBookCover("");
    setPublisher("");
    setYearOfPublishment("");
    setGenre("Roman");
    setNumberOfAvailableCopies("");

    onAddBook(newBook);
  };
  return (
    <div className="addBook">
      <h2>Dodaj novu knjigu</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Ime knjige</label>
        <input
          type="text"
          required
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Autor</label>
        <input
          type="text"
          required
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="bookCover">Naslovna slika</label>
        <input
          type="url"
          value={bookCover}
          id="bookCover"
          onChange={(e) => setBookCover(e.target.value)}
        />
        <label htmlFor="publisher">Izdavačka kuća</label>
        <input
          type="text"
          required
          id="publisher"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <label htmlFor="yearOfPublishment">Godina izdanja</label>
        <input
          type="number"
          required
          id="yearOfPublishment"
          value={yearOfPublishment}
          min={1}
          onChange={(e) => setYearOfPublishment(e.target.value)}
        />
        <label htmlFor="genre">Žanr</label>
        <select
          required
          value={genre}
          id="genre"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="Roman">Roman</option>
          <option value="Poezija">Poezija</option>
          <option value="Drama">Drama</option>
          <option value="Fantazija">Fantazija</option>
          <option value="Znanstvena fantastika">Znanstvena fantastika</option>
          <option value="Biografija">Biografija</option>
        </select>
        <label htmlFor="numberOfAvailableCopies">
          Broj primjeraka dostupan u knjižnici
        </label>
        <input
          type="number"
          required
          id="numberOfAvailableCopies"
          value={numberOfAvailableCopies}
          min={1}
          onChange={(e) => setNumberOfAvailableCopies(parseInt(e.target.value))}
        />
        <button className="submit_form_button" type="submit">
          Dodaj knjigu
        </button>
      </form>
    </div>
  );
};

export default AddBook;
