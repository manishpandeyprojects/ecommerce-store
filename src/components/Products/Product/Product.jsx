import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_DEV_URL + data.Image.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="product-details">
        <span className="product-name">{data.Title.trim()}</span>
        <span className="price">&#8377;{data.Price}</span>
      </div>
    </div>
  );
};

export default Product;
