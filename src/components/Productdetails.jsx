import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api.json";
import axios from "axios";
import "./Productdetails.css";

export const Productdetails = () => {
  const { id } = useParams();
  const product = api.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Add to Cart and adding to the database also
  const handleAddToCart = async () => {
  try {
    const payload = {
      perfumeId: product.id,
      brand: product.brand,
      perfume: product.perfume,
      price: product.price,
      image: product.image,
    };

    const res = await axios.post("http://localhost:5000/cart", payload);

    if (res.status === 201) {
      alert("Item added to cart!");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to add item to cart.");
  }
};


const handleBuyNow = async () => {
    try {
      await axios.post("http://localhost:5000/orders", {
        perfumeId: product.id,
        brand: product.brand,
        perfume: product.perfume,
        price: product.price,
        image: product.image,
        quantity: 1,
      });

      navigate("/orders"); // redirect to Order page
    } catch (err) {
      alert("Order failed");
    }
  };


  return (
    <div className="product-details-container">
      <img className="product-image" src={product.image} alt={product.perfume} />

      <div className="product-info">
        <h1>{product.brand}</h1>
        <h2>{product.perfume}</h2>
        <p>{product.detailedDescription}</p>
        <p>{product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <h3>Price: ${product.price}</h3>
        <p><strong>Ingredients:</strong> {product.ingredients?.join(", ")}</p>

        
        <button
          className="share-button"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: product.perfume,
                text: product.description,
                url: window.location.href,
              });
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert("Product link copied to clipboard!");
            }
          }}
        >
          Share Product
        </button>

       <button className="buy-now-button" onClick={handleBuyNow}>
          Buy Now
        </button>

        <button className="add-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
         
        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};
