import Link from "next/link";
import { useContext } from "react";
import { ProductsContext } from "./context";

const Nav = () => {
  const [wishlist] = useContext(ProductsContext)

  return (
    <header>
      <nav>
        <h1 id="Logo">Logo</h1>
        <ul>
          <Link href="/">
            <a className="navlinks">
              <li>Home</li>
            </a>
          </Link>
          <Link href="/wishlist">
            <a className="nsvlinks">
              <li id="whishlistBtn">Wishlist: {wishlist.length} </li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
