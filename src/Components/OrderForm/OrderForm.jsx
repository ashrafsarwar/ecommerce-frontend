import React, { useState, useContext } from "react";
import "./OrderForm.css";
import { ShopContext } from "../Contexts/ShopContext";
import axios from "axios";

const OrderForm = () => {
  const {
    all_product,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    removeAll,
  } = useContext(ShopContext);

  const user = JSON.parse(localStorage.getItem("user"));

  const [orderData, setOrderData] = useState({
    orderItems: [],
    shippingAddress: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    totalPrice: 0,
    userId: user?._id || "",
    isPaid: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOrderData((prevData) => {
      if (
        ["fullName", "address", "city", "postalCode", "country"].includes(name)
      ) {
        return {
          ...prevData,
          shippingAddress: {
            ...prevData.shippingAddress,
            [name]: value,
          },
        };
      }
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedOrderItems = all_product
      .filter((product) => cartItems[product.id] > 0)
      .map((product) => ({
        nameProduct: product.name,
        quantity: cartItems[product.id],
        image: product.image,
        price: product.new_price,
        product: product.id,
      }));

    if (updatedOrderItems.length === 0) {
      alert(
        "Your cart is empty. Please add items to your cart before placing an order."
      );
      return;
    }

    const finalOrderData = {
      ...orderData,
      orderItems: updatedOrderItems,
      totalPrice: getTotalCartAmount(),
    };

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "http://localhost:3000/orders/addToOrder",
        finalOrderData,
        {
          headers: {
            token: localStorage.getItem("auth-token"),
          },
        }
      );

      if (response.data.success) {
        const { session_url } = response.data;
        removeAll();
        window.location.replace(session_url);

        // alert("Order placed successfully");
      } else {
        console.log(response.data);
        alert("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error.response || error);
      alert("An error occurred while placing the order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h1>Create Order</h1>

      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={orderData.shippingAddress.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
          required
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={orderData.shippingAddress.address}
          onChange={handleChange}
          placeholder="Enter address"
          required
        />
      </div>

      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={orderData.shippingAddress.city}
          onChange={handleChange}
          placeholder="Enter city"
          required
        />
      </div>

      <div className="form-group">
        <label>Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={orderData.shippingAddress.postalCode}
          onChange={handleChange}
          placeholder="Enter postal code"
          required
        />
      </div>

      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={orderData.shippingAddress.country}
          onChange={handleChange}
          placeholder="Enter country"
          required
        />
      </div>

      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        {isSubmitting ? "Placing Order..." : "Submit Order"}
      </button>
    </form>
  );
};

export default OrderForm;
