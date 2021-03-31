import React from "react";
import CartTable from "../components/CartTable";
import HeroMenu from "../components/HeroMenu";

function CartPage() {
  return (
    <div>
      <HeroMenu title="Cart" />
      <CartTable />
    </div>
  );
}

export default CartPage;
