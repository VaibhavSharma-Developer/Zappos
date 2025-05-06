import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="mx-auto mt-16 border w-1/2 flex items-center justify-center flex-col p-5">
      <h1 className="text-4xl font-bold mb-4 underline">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="w-60 mb-4" />
      <p className=' text-center'>{product.description}</p>
      <p className="font-semibold mt-2">Price: ${product.price}</p>
    </div>
  );
}
