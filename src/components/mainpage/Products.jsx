import { useState, useEffect } from "react";
import api from "../../api/api.json";
import "./Products.css";
import { NavLink } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);// use to  display data in product section 

  useEffect(() => {
    setProducts(api);
  }, []);

  return (<>
    <h1> Presenting the Perfecto Chooses </h1>
    <div className="products-grid">
      {products.map((curr) => (
        <NavLink 
        key={curr.id}
        to={`/products/${curr.id}`} 
        className="product-card-link"
        >
          <div className="product-card">
            <img src={curr.image} alt={curr.perfume} />

            <h2>{curr.brand}</h2>
            <p className="perfume-name">{curr.perfume}</p>
            <p className="category">Category: {curr.category}</p>
            <div>{curr.description}</div>
            <h3 className="price">${curr.price}</h3>
          </div>
        </NavLink>
      ))}
    </div>
      </>
  );
};
