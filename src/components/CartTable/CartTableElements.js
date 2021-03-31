import styled from "styled-components";

export const CartContainer = styled.div`
  min-height: 60vh;
  /* padding: 1rem calc((100vw - 1300px) / 2); */
  background: #150f0f;
  color: #fff;
`;

export const DeleteButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const CheckoutButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #ffc500;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
