import { useState } from "react";
import BooksList from "./BooksList";

const Search = ({ books, returnBook, loanBook }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredBooks = books.filter((book) => {
    if (query !== "")
      return (
        (book.title.toLowerCase().includes(query.toLocaleLowerCase()) ||
          book.author.toLowerCase().includes(query.toLocaleLowerCase())) &&
        book.genre.toLowerCase().includes(selectedCategory.toLowerCase())
      );
  });
  const changeSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="search_section_outer_container">
      <div className="search_section">
        <h2>Pretraga kataloga</h2>

        <label htmlFor="search">Naziv knjige ili autora</label>
        <input
          type="search"
          value={query}
          id="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor="category">Žanr knjige</label>
        <select
          value={selectedCategory}
          onChange={(e) => changeSelectedCategory(e)}
          id="category"
        >
          <option value=""></option>
          <option value="Roman">Roman</option>
          <option value="Poezija">Poezija</option>
          <option value="Drama">Drama</option>
          <option value="Fantazija">Fantazija</option>
          <option value="Znanstvena fantastika">Znanstvena fantastika</option>
          <option value="Biografija">Biografija</option>
        </select>
        <BooksList
          books={filteredBooks}
          returnBook={returnBook}
          loanBook={loanBook}
        />
      </div>
    </div>
  );
};

export default Search;
