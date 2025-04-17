import React, { useEffect, useState } from "react";
import "./Popular.css";
import all_data from "../Assets/new_collections";
import Item from "../Item/Item";
import axios from "axios";

function Popular() {
  const [popular_data, setPopular_data] = useState();

  const fetchPopularProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/products/popularProduct"
      );
      setPopular_data(res.data.popularProducts);
      console.log(popular_data);
    } catch (error) {
      console.error("Error fetching popular products:", error);
    }
  };
  console.log(popular_data);

  useEffect(() => {
    fetchPopularProducts();
  }, []);

  if (!popular_data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="popular">
      <h1>POPULAR IN WOMENS</h1>
      <hr />
      <div className="popular-items">
        {popular_data?.length > 0 ? (
          popular_data?.map((item, index) => (
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
}

export default Popular;
