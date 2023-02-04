import { useState } from "react";

function BookEdit({ book, onSubmit }) {

  const [newTitle, setNewTitle] = useState(book.title);

  function handleChange(evt) {
    const { value } = evt.target;
    setNewTitle(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(book.id, newTitle);
  }

  return <form className="book-edit" onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      onChange={handleChange}
      value={newTitle}
      className="input"></input>
    <button className="button is-primary">Save</button>
  </form>;

}

export default BookEdit;