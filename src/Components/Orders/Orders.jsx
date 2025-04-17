import React, { useContext, useEffect, useState } from "react";
import { FaBoxOpen } from "react-icons/fa6";
import "./Orders.css";
import toast from "react-hot-toast";
import OrderModal from "../OrderModal/OrderModal";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null); // State to handle selected order
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user?._id;

  const fetchUserOrders = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/orders/getOrdersOfUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("auth-token"),
          },
          body: JSON.stringify({ userID }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setOrders(data.orders);
      } else {
        console.error("Error fetching orders:", data.message);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    if (userID) {
      fetchUserOrders();
    }
  }, [userID]);

  const openModal = (order) => {
    setSelectedOrder(order); // Set the selected order
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
    window.location.reload();
  };

  return (
    <div className="orderContainer">
      <Link to="/cart" className="back-to-cart">
        <IoMdArrowBack />
        back to cart
      </Link>

      <h1>Orders</h1>
      <div className="orderListHeadings">
        <p>Box</p>
        <p>Order#</p>
        <p>Total</p>
        <p>Items No.</p>
        <p>Paid At</p>
        <p>Status</p>
      </div>
      <div className="ordersBox">
        {orders
          .slice()
          .reverse()
          .map((order, index) => {
            return (
              <div
                className="orderList"
                key={order._id}
                onClick={() => openModal(order)} // Add onClick to open modal with the order details
              >
                <p>
                  <FaBoxOpen className="FaBoxOpen" />
                </p>
                <p>Order # {index + 1}</p>
                <p style={{ color: "gray", fontWeight: "bold" }}>
                  $ {order.totalPrice}
                </p>
                <p>{order.orderItems.length} x items</p>
                <p>{order.date}</p>
                <p>{new Date(order.paidAt).toLocaleDateString()}</p>
                <p
                  className={`statusLabel ${
                    order.isDelivered ? "delivered" : "pending"
                  }`}
                  style={{ color: order.isDelivered ? "green" : "#721c24" }}
                >
                  {order.isDelivered ? "Delivered" : "Pending..."}
                </p>
              </div>
            );
          })}
      </div>
      {isModalOpen && <OrderModal order={selectedOrder} onClose={closeModal} />}
    </div>
  );
}

export default Orders;
