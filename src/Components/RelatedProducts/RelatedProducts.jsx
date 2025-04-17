import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import axios from "axios";

function RelatedProducts(props) {
  const [all_data, setAll_data] = useState([]);
  let { product } = props;
  product = product[0];

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/products/relatedProducts",
          product
        );
        setAll_data(res.data.relatedProducts);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    fetchRelated();
  }, [product]);

  if (!all_data.length) return null;

  return (
    <div className="related">
      <h1>Related Product</h1>
      <hr />
      <div className="related-items">
        {all_data.map((item, index) => (
          <Item
            id={item.id}
            key={index}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
