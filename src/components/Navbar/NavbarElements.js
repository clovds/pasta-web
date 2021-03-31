import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { MdRestaurantMenu, MdShoppingCart } from "react-icons/md";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* z-index: 999; */
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon2 = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-300%, 100%);
    font-weight: bold;
  }
  Dropbtn {
    transform: translate(-300%, 100%);
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(MdRestaurantMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const Cart = styled(MdShoppingCart)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const StyledLi = styled.li`
  float: left;
  transform: translate(-100%, 100%);
`;

export const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  /* padding: 14px 16px; */
  text-decoration: none;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  & ${DropDownContent} {
    display: block;
  }
`;

export const SubA = styled.a`
  color: gray;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;
