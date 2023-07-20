import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

const Home = () => {
  const navigate = useNavigate();
  const { categories, setCategories, products, setProducts, setError } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
    // eslint-disable-next-line
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res.name);
      if (res.name === "AxiosError") {
        setError(true);
        navigate("/error");
        return;
      }
      setCategories(res);
    });
  };

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  return (
    <div className="home">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
