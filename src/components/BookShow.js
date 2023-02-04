import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onEdit, onDelete }) {

  const [showEdit, setShowEdit] = useState(false);

  function handleDeleteClick(evt) {
    onDelete(book.id);
  }

  function handleEditClick(evt) {
    setShowEdit(!showEdit);
  }

  function handleSubmit(id, title) {
    onEdit(id, title);
    setShowEdit(false);
  }

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit
      book={book}
      onSubmit={handleSubmit} />;
  }

  return <div className="book-show">
    <div>{content}</div>
    <div className="actions">
      <button onClick={handleEditClick} className="edit">edit</button>
      <button onClick={handleDeleteClick} className="delete">X</button>
    </div>
  </div>;
}

export default BookShow;