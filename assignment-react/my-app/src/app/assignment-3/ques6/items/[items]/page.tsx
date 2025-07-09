'use client';

import { redirect, useParams } from 'next/navigation';
import { getProductById } from '../../../../../components/Items';

export default function ProductDetail() {
  const params = useParams();
  const productId = Number(params.items);
  const product = getProductById(productId);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button onClick={()=>redirect("/assignment-3/ques6")}>Back</button>
    </div>
  );
}
