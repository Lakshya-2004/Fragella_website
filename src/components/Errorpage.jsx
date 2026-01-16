import { NavLink } from "react-router-dom";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";
export const Errorpage = () => {
  const navigate =useNavigate();
  return (
    <div className="error-container">
      <h1>404: Page Not Found!</h1>
      {/* <NavLink to="/" className="home-link">
        Go to Home Page
      </NavLink> */}
      <button className="btn" onClick={()=>{
       
        navigate(-1);
      }}>Go back</button>
    </div>
  );
};
