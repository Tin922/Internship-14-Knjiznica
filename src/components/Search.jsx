import { useState } from "react";
import BooksList from "./BooksList";

const Search = ({ books, returnBook, loanBook }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredBooks = books.filter((book) => {
    return (
      (book.title.toLowerCase().includes(query.toLocaleLowerCase()) ||
        book.author.toLocaleLowerCase().includes(query.toLocaleLowerCase())) &&
      book.genre
        .toLocaleLowerCase()
        .includes(selectedCategory.toLocaleLowerCase())
    );
  });
  const changeSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <label>Pretraga</label>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => changeSelectedCategory(e)}
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
  );
};

export default Search;
