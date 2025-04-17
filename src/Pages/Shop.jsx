import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollectins from "../Components/Collections/NewCollections.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollectins />
      <NewsLetter />
    </div>
  );
}

export default Shop;
