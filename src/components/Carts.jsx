import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Carts.css";

export const Carts = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:5000/cart");
      setCartItems(res.data); // <-- Make sure res.data is an array
      console.log("Cart items:", res.data); // <-- Debug
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      setCartItems(cartItems.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.perfume} />
              <div className="cart-info">
                <h3>{item.perfume}</h3>
                <p>Brand: {item.brand}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${totalPrice}</h2>
        </div>
      )}
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};
