import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/action";
import {
  Bars,
  Cart,
  Nav,
  NavIcon,
  NavIcon2,
  NavLink,
  DropDownLi,
  Dropbtn,
  DropDownContent,
  SubA,
} from "./NavbarElements";
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle, toggleLogin }) => {
  const email = useSelector((state) => state.user.email);
  const [dropdownClick, setDropdownClick] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const dropdown = (email) => {
    console.log(dropdownClick);
    return (
      <NavIcon2>
        <DropDownLi>
          <Dropbtn onClick={() => setDropdownClick(!dropdownClick)}>
            {email.split("@")[0]}
          </Dropbtn>
          {dropdownClick ? (
            <DropDownContent>
              {" "}
              <SubA>Account</SubA>
              <SubA onClick={() => dispatch(logoutAction())}>Logout</SubA>
            </DropDownContent>
          ) : null}
        </DropDownLi>
      </NavIcon2>
    );
  };

  const loginBtn = () => {
    return (
      <NavIcon2 onClick={toggleLogin}>
        <p>Login</p>
      </NavIcon2>
    );
  };

  return (
    <div>
      <Nav>
        <NavLink to="/">Pasta</NavLink>
        {email ? dropdown(email || "not found") : loginBtn()}
        <NavIcon>
          <p onClick={() => history.push("/menu")}>Menu</p>
          {email ? (
            <Cart onClick={() => history.push("/cart")} />
          ) : (
            <Bars onClick={() => history.push("/menu")} />
          )}
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Navbar;
