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
        <label>Ime knjige</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Autor</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Naslovna slika</label>
        <input
          type="url"
          value={bookCover}
          onChange={(e) => setBookCover(e.target.value)}
        />
        <label>Izdavačka kuća</label>
        <input
          type="text"
          required
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <label>Godina izdanja</label>
        <input
          type="number"
          required
          value={yearOfPublishment}
          min={1}
          onChange={(e) => setYearOfPublishment(e.target.value)}
        />
        <label>Žanr</label>
        <select
          required
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="roman">Roman</option>
          <option value="poezija">Poezija</option>
          <option value="drama">Drama</option>
          <option value="fantazija">Fantazija</option>
          <option value="znanstvena fantastika">Znanstvena fantastika</option>
          <option value="biografija">Biografija</option>
        </select>
        <label>Broj primjeraka dostupan u knjižnici</label>
        <input
          type="number"
          required
          value={numberOfAvailableCopies}
          min={1}
          onChange={(e) => setNumberOfAvailableCopies(parseInt(e.target.value))}
        />
        <button type="submit">Dodaj knjigu</button>
      </form>
    </div>
  );
};

export default AddBook;
