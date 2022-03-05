import { ProductsContext } from "../components/layout/context";
import { useContext } from "react";
import WishlistCard from "../components/bookstore/WishlistCard";

const Wishlist = () => {
  const [wishlist] = useContext(ProductsContext);

  return (
    <div className="wishlist">
      <section className="Books-list">
        {wishlist?.map((book) => (
          <WishlistCard
            title={book.title}
            author={book.author}
            img={book.imgUrl}
            price={book.price}
            review={book.review}
            desc={book.description}
            src={book.source}
            key={book.id}
          />
        ))}
      </section>
    </div>
  );
};

export default Wishlist;
