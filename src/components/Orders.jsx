import { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="order-container">
      <h1>Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders placed yet</p>
      ) : (
        orders.map((order, index) => (
          <div className="order-card" key={index}>
            <img src={order.image} alt={order.perfume} />
            <div>
              <h3>{order.perfume}</h3>
              <p>Brand: {order.brand}</p>
              <p>Price: ${order.price}</p>
              <p>Status: <span>Confirmed</span></p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
