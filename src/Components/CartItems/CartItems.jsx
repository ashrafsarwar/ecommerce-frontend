import React, { useContext } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import "./CartItems.css";
import cart_cross from "../Assets/cart_cross_icon.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function CartItems() {
  const {
    all_product,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    removeAll,
  } = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="track-conatainer">
        {localStorage.getItem("auth-token") && (
          <button
            onClick={() => window.location.replace("/orders")}
            className="track-orders-button"
          >
            Track My Orders
          </button>
        )}
      </div>
      <h1>Cart Items</h1>
      <div className="cartItems-heading">
        <p>Product</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product?.map((product, index) => {
        if (cartItems[product.id] > 0) {
          return (
            <React.Fragment key={product.id}>
              <div className="cartItems-item">
                <div className="cartItems-item-img">
                  <img src={product.image} alt="img" />
                </div>
                <p>{product.name}</p>
                <div className="cartItems-item-quantity">
                  <button
                    onClick={() => {
                      removeFromCart(product.id);
                      {
                        cartItems[product.id] === 1 &&
                          toast.success("Product removed from cart");
                      }
                    }}
                  >
                    -
                  </button>
                  <p>{cartItems[product.id]}</p>
                  <button onClick={() => addToCart(product.id)}>+</button>
                </div>
                <p className="cartItems-item-price">
                  ${product.new_price}
                  <span>/unit</span>
                </p>
                <p className="cartItems-item-total">
                  ${product.new_price * cartItems[product.id]}
                </p>
                <div className="cartItems-item-remove">
                  <img
                    src={cart_cross}
                    alt="cross"
                    onClick={() => {
                      removeAll(product.id);
                      toast.success("Product removed from cart");
                    }}
                  />
                </div>
              </div>
              <hr />
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
      <div className="down">
        <h1>Cart Totals</h1>
        <div className="cartItems-down">
          <div className="cartItems-down-left">
            <div className="cartItems-down-subtotal">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-down-shipping">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-down-checkout">
              <Link to="/order">
                <button>Checkout</button>
              </Link>
            </div>
          </div>
          <div className="cartItems-down-right">
            <p>If you have any promo code, please enter</p>
            <div className="promo-fields">
              <input type="text" placeholder="Enter Your Code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
