import "./Product.scss";

import productImg from '../../../assets/products/earbuds-prod-1.webp';

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={productImg} alt="" />
      </div>
      <div className="product-details">
        <span className="product-name">Product Name</span>
        <span className="price">&#8377;499</span>
      </div>
    </div>
  );
};

export default Product;
