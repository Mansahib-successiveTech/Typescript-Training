"use client";
import Link from "next/link";

const products = [
  { id: 1, name: "Product One", description: "This is the first product." },
  { id: 2, name: "Product Two", description: "This is the second product." },
  { id: 3, name: "Product Three", description: "This is the third product." },
];

export function getProductById(id:number) {
  return products.find((product) => product.id === id);
}

const Items = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/assignment-3/ques6/items/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
