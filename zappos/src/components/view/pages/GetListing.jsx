import axios from "axios";
import React, { useEffect, useState } from "react";

const GetListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res?.data?.products, "response");
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetListing;
