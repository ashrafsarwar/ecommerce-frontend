import React, { useContext, useState } from "react";
import dropdown from "../Components/Assets/dropdown_icon.png";
import { ShopContext } from "../Components/Contexts/ShopContext";
import Item from "../Components/Item/Item";
import "./CSs/ShopCategoury.css";
import { all } from "axios";
import { Link } from "react-router-dom";

function ShopCategoury(props) {
  const [sort, setSort] = useState("sort");
  const { all_product } = useContext(ShopContext);
  const categoryProducts = all_product.filter(
    (product) => product.category === props.category
  );
  const categoryLength = categoryProducts.length;

  const handleSort = (e) => {
    console.log(sort);
    setSort(e.target.value);
    if (e.target.value === "low to high") {
      all_product.sort((a, b) => a.new_price - b.new_price);
    } else if (e.target.value === "high to low") {
      all_product.sort((a, b) => b.new_price - a.new_price);
    }
  };

  return (
    <div className="shopCategoury">
      <img className="banner-cat" src={props.banner} alt="banner" />
      <div className="categoury-sort">
        <p>
          <span>showing {categoryLength}</span> out of {all_product.length}{" "}
          products
        </p>
        <div>
          <select
            className="categoury-sort-icon"
            value={sort}
            onChange={handleSort}
            name="sort"
            id="sort"
          >
            <option value="">Sort by</option>
            <option value="low to high">low to high</option>
            <option value="high to low">high to low</option>
          </select>
        </div>
      </div>
      <div className="products">
        {all_product.map((product, index) => {
          if (product.category === props.category) {
            return (
              <Item
                id={product.id}
                key={index}
                name={product.name}
                image={product.image}
                old_price={product.old_price}
                new_price={product.new_price}
                category={product.category}
              />
            );
          } else return null;
        })}
      </div>
      <Link to="/crazy">
        <div className="explore-more">Explore More</div>
      </Link>
    </div>
  );
}

export default ShopCategoury;
