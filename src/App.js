import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from 'axios';

const API_URL = "http://localhost:3001/books";

function App() {
  const [books, setBooks] = useState([]);

  console.log(books, "books");

  useEffect(() => {
    async function fetchBooks() {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    }
  }, []);


  async function createBook(title) {
    const response = await axios.post(API_URL, { title });
    setBooks(currBooks => [...currBooks, response.data]);
  }

  function updateBook(id, newTitle) {
    const updatedBooks = books.map(book => {
      if (book.id === id) return { ...book, title: newTitle };
      return book;
    });
    setBooks(updatedBooks);
  }

  function deleteBook(id) {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  }

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={updateBook} onDelete={deleteBook} />
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
