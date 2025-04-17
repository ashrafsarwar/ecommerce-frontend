import React from "react";
import "./BreadCrum.css";
import BreadCrumImage from "../Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";

function BreadCrum(props) {
  let { product } = props;

  product = product[0];
  if (!product) return null;

  return (
    <div className="breadcrum">
      <Link to="/">Home</Link> <img src={BreadCrumImage} alt="BreadCrum" />
      <Link to="/">SHOP</Link> <img src={BreadCrumImage} alt="BreadCrum" />
      <Link to={`/${product.category}`}>{product.category}</Link>
      <img src={BreadCrumImage} alt="BreadCrum" />
      {product.name}
    </div>
  );
}

export default BreadCrum;
