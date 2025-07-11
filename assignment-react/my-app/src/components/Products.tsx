"use client"
import { useShop } from "../context/ShopContext";
const Products = () => {
  const products = [
    { id: 1, name: "T-shirt", price: 100 },
    { id: 2, name: "Watch", price: 200 },
    { id: 3, name: "Sun Glasses", price: 100 },
    { id: 4, name: "Shoes", price: 200 },
  ];
  const {addToCart}=useShop();
  return (
    <>
      <p>shop</p>
      <ul>
        {products.map((items) => {
            return(
          <p style={{width:"90px"}} key={items.id}>
            {items.name} -- {items.price}
            <button 
            onClick={()=>addToCart(items)}
            style={{margin:"3px"}}> Add to Cart</button>
          </p>
          )
        })}
      </ul>
    </>
  );
};
export default Products
