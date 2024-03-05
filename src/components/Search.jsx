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
        <label htmlFor="search">Pretraga kataloga</label>
        <input
          type="search"
          value={query}
          id="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor="category">Odaberite žanr knjige</label>
        <select
          value={selectedCategory}
          onChange={(e) => changeSelectedCategory(e)}
          id="category"
        >
          <option value=""></option>
          <option value="roman">Roman</option>
          <option value="poezija">Poezija</option>
          <option value="drama">Drama</option>
          <option value="fantazija">Fantazija</option>
          <option value="znanstvena fantastika">Znanstvena fantastika</option>
          <option value="biografija">Biografija</option>
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
