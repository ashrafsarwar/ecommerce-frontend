import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import { ShopContext } from "../Components/Contexts/ShopContext";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.filter(
    (product) => product.id === Number(productId)
  );

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <ProductDescription />
      <RelatedProducts product={product} />
    </div>
  );
}

export default Product;
