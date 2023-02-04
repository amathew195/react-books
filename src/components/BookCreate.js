import { useState } from "react";
import './BookCreate.css';

function BookCreate({ onSubmit }) {

  const [title, setTitle] = useState("");

  function handleChange(evt) {
    const { value } = evt.target;
    setTitle(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(title);
    setTitle("");
  }

  return <div className="book-create">
    <h3>Add a book!</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input className="input" id="title" onChange={handleChange} value={title}></input>
      <button className="button">Submit</button>
    </form>
  </div>;
}

export default BookCreate;