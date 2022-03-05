import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

    const [wishlist, setWishlist] = useState([])
    

  return (
    <ProductsContext.Provider value={[wishlist, setWishlist]}>
      {children}
    </ProductsContext.Provider>
  );
};





