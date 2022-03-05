import { useContext } from "react";
import { ProductsContext } from "../layout/context";

const WishlistCard = ({ title, author, img }) => {
  const [wishlist, setWishlist] = useContext(ProductsContext)

  const reomoveFromCart = () => {
     setWishlist(wishlist.filter(card => card.title !== title))
    }

    return ( 
<div className="BookCard">
      <img className="Book-cover" src={img} alt="bookcover" />
      <div className="BookCard-cover">
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="Btns">
          <button className="buy">
            Buy
          </button>
          <button className="remove" onClick={reomoveFromCart}>
            Remove
          </button>
        </div>
      </div>
    </div>
     );
}
 
export default WishlistCard;