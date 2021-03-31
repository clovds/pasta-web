import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { deleteCartAction, checkoutAction } from "../../redux/action";
import {
  CartContainer,
  DeleteButton,
  CheckoutButton,
} from "./CartTableElements";
import { toast } from "react-toastify";

const CartTable = () => {
  const { cart_list } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const checkoutBtn = () => {
    dispatch(checkoutAction(user.id));
    toast.info(`Thank you for your purchase!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const renderCart = () => {
    return cart_list.map((val, index) => {
      return (
        <tr key={index}>
          <td>{val.productName}</td>
          <td>{val.qty}</td>
          <td>$ {val.productPrice * val.qty}</td>
          <td>
            <DeleteButton
              onClick={() => dispatch(deleteCartAction(val.id, val.userID))}
            >
              Delete
            </DeleteButton>
          </td>
        </tr>
      );
    });
  };
  return (
    <CartContainer>
      <Table
        style={{
          textAlign: "center",
          fontSize: "24px",
          backgroundColor: "#150f0f",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          color: "whitesmoke",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderCart()}</tbody>
        <tfoot style={{ marginTop: "5px" }}>
          <th></th>
          <th></th>
          <th></th>
          {cart_list.length !== 0 ? (
            <CheckoutButton onClick={checkoutBtn}>Checkout</CheckoutButton>
          ) : null}
        </tfoot>
      </Table>
    </CartContainer>
  );
};

export default CartTable;
