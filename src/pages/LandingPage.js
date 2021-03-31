import React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { ProductData, ProductDataTwo } from "../components/Products/data";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Products heading="Choose your favorite" data={ProductData} />
      <Feature />
      <Products heading="Sweet Treats for you" data={ProductDataTwo} />
    </div>
  );
}

export default LandingPage;
