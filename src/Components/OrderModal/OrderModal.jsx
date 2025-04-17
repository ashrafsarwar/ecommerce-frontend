import React, { useState, useEffect } from "react";
import "./OrderModal.css";
import cross from "../../Components/Assets/cross_icon.png";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function OrderModal({ order, onClose }) {
  const [status, setStatus] = useState(
    order.isDelivered ? "delivered" : "pending"
  );
  const [newOrder, setNewOrder] = useState({});

  useEffect(() => {
    setNewOrder({ ...order });
  }, [order]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          className="close-times"
          onClick={onClose}
          src={cross}
          alt="cross"
        />

        <h2>Order Details</h2>
        <div className="order-info">
          <p>
            <strong>Order ID:</strong> {newOrder._id}
          </p>
          <p>
            <strong>Total Price:</strong> ${newOrder.totalPrice}
          </p>
          <p>
            <strong>Paid At:</strong>{" "}
            {new Date(newOrder.paidAt).toLocaleString()}
          </p>
          <h3>Shipping Address</h3>
          <p>
            <strong>Name:</strong> {newOrder.shippingAddress?.fullName}
          </p>
          <p>
            <strong>Address:</strong> {newOrder.shippingAddress?.address}
          </p>
          <p>
            <strong>Postal Address:</strong> {newOrder.shippingAddress?.city},{" "}
            {newOrder.shippingAddress?.postalCode}
          </p>
          <p>
            <strong>Country :</strong>
            {newOrder.shippingAddress?.country}
          </p>
        </div>
        <h3>Order Items</h3>
        <ul className="order-items">
          {newOrder.orderItems?.map((item, index) => (
            <li key={index} className="order-item">
              <img
                src={item.image}
                alt={item.nameProduct}
                className="item-image"
              />
              <div>
                <p>{item.nameProduct}</p>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="status-update">
          <label htmlFor="status">Status:</label>
          <p className={`${status === "pending" ? "pending" : "delivered"}`}>
            {status}
          </p>
        </div>
        {status === "delivered" ? null : (
          <button
            className="update-button"
            onClick={() => {
              toast.success("Request for fast shipping sent successfully");
            }}
          >
            Request Fast Shipping
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderModal;
