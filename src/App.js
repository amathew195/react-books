import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import uuid from 'react-uuid';


function App() {
  const [books, setBooks] = useState([]);

  console.log(books, "books");

  function createBook(title) {
    setBooks([...books, {
      title,
      id: uuid()
    }]);
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
      <BookList books={books} onEdit={updateBook} onDelete={deleteBook} />
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
