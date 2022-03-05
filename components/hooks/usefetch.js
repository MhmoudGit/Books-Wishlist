import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "bookshelves.p.rapidapi.com",
        "x-rapidapi-key": "a18eb88b9cmsh12ebb6d581c982cp105ef6jsn74d30ce25380",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return { data };
};

export default useFetch;
