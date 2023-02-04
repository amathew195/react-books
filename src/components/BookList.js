import BookShow from "./BookShow";

function BookList({ books, onEdit, onDelete }) {
  return <div className="book-list">
    {books.map((book, index) => <BookShow
      book={book}
      key={index}
      onEdit={onEdit}
      onDelete={onDelete} />)}
  </div>;
}

export default BookList;