import React, { useContext } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import Item from "../Item/Item";

function Latest() {
  const { all_product } = useContext(ShopContext);
  const latest_products = all_product.slice(0, 12);
  return (
    <div>
      <div className="popular">
        <h1>Latest Products</h1>
        <hr />
        <div className="popular-items">
          {latest_products?.length > 0 ? (
            latest_products?.map((item, index) => (
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
      );
    </div>
  );
}

export default Latest;
