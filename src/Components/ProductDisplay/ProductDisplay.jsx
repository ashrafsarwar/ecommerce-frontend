import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import star from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../Contexts/ShopContext";
import { toast } from "react-hot-toast";

function ProductDisplay(props) {
  const { addToCart } = useContext(ShopContext);
  let { product } = props;
  product = product[0];

  const [hasReloaded, setHasReloaded] = useState(false);

  useEffect(() => {
    const hasReloadedSession = sessionStorage.getItem("hasReloaded");

    if (!hasReloadedSession) {
      sessionStorage.setItem("hasReloaded", "true");
      setHasReloaded(true);
      window.location.reload();
    }
  }, []);

  if (!product) return <h1>Loading...</h1>;

  if (hasReloaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-main-img">
          <img src={product.image} className="main-img" alt="img" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star_dull} alt="star" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-price">
          <div className="productDisplay-right-old-price">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-new-price">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            adipisci autem nesciunt mollitia iusto, voluptatum saepe laborum
          </p>
        </div>
        <div className="productDisplay-right-size">
          <p>Select Size</p>
          <div className="productDisplay-right-size-btns">
            <div>XS</div>
            <div>S</div>
            <div className="select">M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <div className="productDisplay-right-addCart-btn">
          <button
            onClick={() => {
              addToCart(product?.id);
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="productDisplay-right-tags">
          <p>
            <span>Category: </span>
            {product.category}
          </p>
          <p>
            <span>Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
