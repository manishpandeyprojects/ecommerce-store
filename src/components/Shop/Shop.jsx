import React, { useContext, useEffect } from "react";
import "./Shop.scss";
import { Context } from "../../utils/context";
import Products from "../Products/Products";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const { products } = useContext(Context);
  const navigate = useNavigate();
  console.log(products);

  useEffect(() => {
    if (!products) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="layout">
          {products && <Products headingText="Products" products={products} />}
        </div>
      </div>
    </>
  );
};

export default Shop;
