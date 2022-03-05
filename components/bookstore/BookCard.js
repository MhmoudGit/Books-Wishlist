import { useContext } from "react";
import BookModal from "./BookModal";
import { ProductsContext } from "../layout/context";
import useModal from "../hooks/usemodal";
import Image from "next/image";

const BookCard = ({ title, author, img, price, review, desc, src }) => {
  const { modal, openModal, setModal } = useModal()
  const [wishlist, setWishlist] = useContext(ProductsContext)

  const addBook = {
    title: title,
    author: author,
    imgUrl: img,
    price: price,
    review: review,
    description:
      desc,
    source: src,
  }

  const addToCart = () => {
     setWishlist(wishlist.some((one) => one.title === title)? wishlist : (arr) => [...arr, addBook] )
  }

  return (
    <div className="BookCard">
      <Image className="Book-cover" src={img} alt="bookcover" />
      <div className="BookCard-cover">
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="Btns">
          <button className="Btns-one" onClick={openModal}>
            Details
          </button>
          <button className="Btns-one" onClick={addToCart}>Add to Wishlist</button>
        </div>
      </div>
      {modal && (
        <BookModal
          close={setModal}
          title={title}
          author={author}
          img={img}
          price={price}
          review={review}
          desc={desc}
          src={src}
        />
      )}
    </div>
  );
};

export default BookCard;
