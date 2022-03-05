import BookCard from "./BookCard";
import useFetch from "../hooks/usefetch";
import Spinner from "../assets/spinner";

const BookList = () => {
  const { data: books } = useFetch("https://bookshelves.p.rapidapi.com/books");

  return (
    <section className="Books-list">
      {books.Books ? books.Books?.map((book) => (
        <BookCard
          title={book.title}
          author={book.author}
          img={book.imgUrl}
          price={book.price}
          review={book.review}
          desc={book.description}
          src={book.source}
          key={book.id}
        />
      )) : <Spinner />}
    </section>
  );
};

export default BookList;
