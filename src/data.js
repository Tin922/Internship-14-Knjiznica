import { v4 as uuidv4 } from "uuid";

const booksInLibrary = [
  {
    uuid: uuidv4(),
    title: "Zločin i kazna",
    author: "Fyodor Dostoevsky",
    bookCover:
      "https://www.sareni-ducan.hr/wp-content/uploads/2023/01/zlocin_kazna.jpg",
    publisher: "Penguin Random House",
    yearOfPublishment: "1866",
    genre: "Roman",
    numberOfAvailableCopies: 5,
  },
  {
    uuid: uuidv4(),
    title: "Pride and Prejudice",
    author: "Jane Austen",
    bookCover:
      "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Modern Library",
    yearOfPublishment: "1813",
    genre: "Roman",
    numberOfAvailableCopies: 7,
  },

  {
    uuid: uuidv4(),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    bookCover:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    publisher: "J.B. Lippincott & Co.",
    yearOfPublishment: "1960",
    genre: "Roman",
    numberOfAvailableCopies: 4,
  },
  {
    uuid: uuidv4(),
    author: "Dan Brown",
    title: "The Da Vinci Code",
    bookCover:
      "https://m.media-amazon.com/images/I/815WORuYMML._AC_UF1000,1000_QL80_.jpg",
    publisher: "Charles Scribner's Sons",
    yearOfPublishment: "2003",
    genre: "Roman",
    numberOfAvailableCopies: 8,
  },
  {
    uuid: uuidv4(),
    title: "Lirika",
    author: "Miroslav Krleža",
    bookCover:
      "https://arka-knjiga.hr/static/images/books/b9244-1694930581446360.jpg",
    publisher: "Naklada Ljevak",
    yearOfPublishment: "1912",
    genre: "Poezija",
    numberOfAvailableCopies: 3,
  },
  {
    uuid: uuidv4(),
    title: "Hamlet",
    author: "William Shakespeare",
    bookCover:
      "https://m.media-amazon.com/images/I/51cjtXsg1eL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Penguin Classics",
    yearOfPublishment: "1603",
    genre: "Drama",
    numberOfAvailableCopies: 6,
  },
  {
    uuid: uuidv4(),
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    bookCover:
      "https://m.media-amazon.com/images/I/71RVt35ZAbL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Scholastic",
    yearOfPublishment: "1997",
    genre: "Fantazija",
    numberOfAvailableCopies: 10,
  },
  {
    uuid: uuidv4(),
    title: "Dune",
    author: "Frank Herbert",
    bookCover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    publisher: "Ace Books",
    yearOfPublishment: "1965",
    genre: "Znanstvena fantastika",
    numberOfAvailableCopies: 4,
  },
  {
    uuid: uuidv4(),
    title: "Steve Jobs",
    author: "Walter Isaacson",
    bookCover:
      "https://m.media-amazon.com/images/I/71sVQDj0SCL._AC_UF1000,1000_QL80_.jpg",
    publisher: "Simon & Schuster",
    yearOfPublishment: "2011",
    genre: "Biografija",
    numberOfAvailableCopies: 5,
  },
];
export default booksInLibrary;
