import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 301; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_product, setAll_product] = useState([]);

  const addToCart = (itemId) => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast.success("Item added to Cart");
      axios
        .post(
          "http://localhost:3000/cart/addToCart",
          { itemId },
          { headers: { token } }
        )
        .then((res) => console.log(res.data));
    } else {
      toast.error("Please login first");
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    const token = localStorage.getItem("auth-token");
    if (token) {
      axios
        .post(
          "http://localhost:3000/cart/removeFromCart",
          { itemId },
          { headers: { token } }
        )
        .then((res) => console.log(res.data));
    } else {
      window.location.replace("/loginlogout");
      alert("login first");
    }
  };

  const removeAll = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    console.log("remove all");
    const token = localStorage.getItem("auth-token");
    if (token) {
      axios
        .post(
          "http://localhost:3000/cart/removeAll",
          { itemId },
          { headers: { token } }
        )
        .then((res) => console.log(res.data));
    } else {
      window.location.replace("/loginlogout");
      alert("login first");
    }
  };

  const fetchAllProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products/getproduct");
      const data = await res.json();
      setAll_product(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();

    const token = localStorage.getItem("auth-token");
    if (token) {
      axios
        .post(
          "http://localhost:3000/cart/getCart",
          {}, // Empty data object
          { headers: { token } } // Headers configuration object
        )
        .then((res) => setCartItems(res.data.cartItems))
        .catch((err) => console.error(err));
    } else {
      console.log("No token found");
    }
  }, []);

  const getTotalCartAmount = () => {
    let total = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(key)
        );
        if (itemInfo) {
          total += itemInfo.new_price * cartItems[key];
        }
      }
    }
    return total;
  };

  const cartCount = () => {
    let count = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        count += cartItems[key];
      }
    }
    return count;
  };
  useEffect(() => {
    cartCount();
  }, [cartCount]);

  const contextValue = {
    all_product,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    cartCount,
    removeAll,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
