import { styled } from "styled-components";
import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  box-sizing: border-box;

  ${BaseButton}, ${GoogleButton}, ${InvertedButton} {
    margin-top: auto;
    box-sizing: border-box;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  box-sizing: border-box;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
