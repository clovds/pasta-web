import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../../redux/action";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  Label,
  SideBtnWrap,
  SidebarRoute,
  Input,
} from "./SidebarElements";

const user = {
  email: "",
  password: "",
};

const Sidebar = ({ isOpen, toggle }) => {
  const [register, setRegister] = useState(false);
  const [userData, setUserData] = useState(user);
  const [conPass, setConPass] = useState("");
  const dispatch = useDispatch();

  const toggleRegister = () => {
    setRegister(!register);
  };

  const registerBtn = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (userData.email.match(emailRegex)) {
      if (userData.password === conPass) {
        dispatch(registerAction(userData));
        toggle();
      } else {
        return alert(`Password doesn't match`);
      }
    } else {
      return alert("Invalid Email");
    }
  };

  const loginBtn = () => {
    dispatch(loginAction(userData));
    toggle();
  };

  const sidebarBtn = () => {
    if (register) {
      return (
        <SideBtnWrap style={{ display: "grid" }}>
          <Label style={{ fontSize: "15px", marginTop: "50px" }}>
            Already have an Account ?
          </Label>
          <SidebarRoute onClick={toggleRegister}>Login</SidebarRoute>
        </SideBtnWrap>
      );
    } else {
      return (
        <SideBtnWrap style={{ display: "grid" }}>
          <Label style={{ fontSize: "15px", marginTop: "50px" }}>
            Doesn't have an Account ?
          </Label>
          <SidebarRoute onClick={toggleRegister}>Register</SidebarRoute>
        </SideBtnWrap>
      );
    }
  };

  const sidebarContent = () => {
    if (register) {
      return (
        <SidebarMenu style={{ gridTemplateRows: "repeat(5, 50px)" }}>
          <Label>Email</Label>
          <Input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <Label>Password</Label>
          <Input
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <Label className="my-3">Confirm Password</Label>
          <Input
            type="password"
            value={conPass}
            onChange={(e) => setConPass(e.target.value)}
          />
          <SideBtnWrap>
            <SidebarRoute onClick={registerBtn}>Register</SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      );
    } else {
      return (
        <SidebarMenu>
          <form onSubmit={loginBtn}>
            <Label>Email</Label>
            <Input
              type="text"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <Label>Password</Label>
            <Input
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <SideBtnWrap>
              <SidebarRoute onClick={loginBtn}>Login</SidebarRoute>
            </SideBtnWrap>
          </form>
        </SidebarMenu>
      );
    }
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      {sidebarContent()}
      {sidebarBtn()}
    </SidebarContainer>
  );
};

export default Sidebar;
