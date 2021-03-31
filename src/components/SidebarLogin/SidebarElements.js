import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const Input = styled.input`
  height: 40px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 7%;
  /* margin-bottom: 1px; */
  border-radius: 7px;
  border-color: white;
  text-align: center;
  outline: transparent;
  box-shadow: none;
  border: none;

  &:focus {
    box-shadow: 0 0 5px rgba(239, 138, 138, 1);
    padding: 3px 0px 3px 3px;
    border: 1px solid rgba(239, 138, 138, 1);
  }
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 50px);

  @media screen and(max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.div`
  background: #e31837;
  white-space: nowrap;
  padding: 8px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
