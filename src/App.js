import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import uuid from 'react-uuid';


function App() {
  const [books, setBooks] = useState([]);

  console.log(books, "books");

  function createBook(title) {
    setBooks([...books, {
      title: title,
      id: uuid()
    }]);
  }

  return (
    <div className="App">
      <BookList books={books} />
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
