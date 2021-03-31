import React from "react";
import Products from "../Products";
import { ProductData, ProductDataTwo } from "../Products/data";
import { MenuContainer } from "./MenuElement";

function Menu() {
  return (
    <MenuContainer>
      <Products heading="Pasta" data={ProductData} />
      <Products heading="Dessert" data={ProductDataTwo} />
    </MenuContainer>
  );
}

export default Menu;
