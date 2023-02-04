import BookShow from "./BookShow";

function BookList({ books }) {
  return <div>
    {books.map((book, index) => <BookShow book={book} key={index} />)}
  </div>;
}

export default BookList;