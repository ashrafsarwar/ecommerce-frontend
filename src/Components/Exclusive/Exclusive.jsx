import React, { useContext } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import Item from "../Item/Item";

function Exclusive() {
  const { all_product } = useContext(ShopContext);
  console.log(all_product);
  const exclusive_products = all_product.filter(
    (product) => product.new_price > 50
  );
  return (
    <div>
      <div className="popular">
        <h1>Exclusive Products</h1>
        <hr />
        <div className="popular-items">
          {exclusive_products?.length > 0 ? (
            exclusive_products?.map((item, index) => (
              <Item
                id={item.id}
                key={index}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                category={item.category}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Exclusive;
