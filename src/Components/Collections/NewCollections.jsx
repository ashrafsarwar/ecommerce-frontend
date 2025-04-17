import React, { useEffect, useState } from "react";
import "./NewCollections.css";
// import all_data from "../Assets/data";
import Item from "../Item/Item";
import axios from "axios";

function NewCollectins() {
  const [newCollections_data, setNewCollectionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "http://localhost:3000/products/newCollection"
        );
        setNewCollectionsData(data.data.newCollection);
      } catch (error) {
        console.error("Error fetching new collections data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="newCollections">
      <h1>New Collections</h1>
      <hr />
      <div className="newCollections-items">
        {newCollections_data?.map((item, index) => {
          return (
            <Item
              id={item.id}
              key={index}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCollectins;
