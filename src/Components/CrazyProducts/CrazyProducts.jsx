import React, { useContext, useState } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import Item from "../Item/Item";

function CrazyProducts(props) {
  const { all_product } = useContext(ShopContext);
  const [crazy_products, setCrazy_products] = useState(
    all_product.slice(0, 12)
  );
  const [visibleCount, setVisibleCount] = useState(12);

  function showMore() {
    const newVisibleCount = visibleCount + 12;
    setCrazy_products(all_product.slice(0, newVisibleCount));
    setVisibleCount(newVisibleCount);
  }

  return (
    <div>
      <div className="popular">
        <h1>All Products</h1>
        <hr />
        <div className="popular-items">
          {crazy_products?.length > 0 ? (
            crazy_products?.map((item, index) => (
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
      <div className="explore-more" onClick={showMore}>
        Explore More
      </div>
    </div>
  );
}

export default CrazyProducts;
