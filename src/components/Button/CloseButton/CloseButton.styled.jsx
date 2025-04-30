import styled from "styled-components";
import { theme } from "../../../global_styles/theme";

export const CloseButtonStyled = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const Line = styled.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: ${theme.colors.lightText};
  border-radius: 1px;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`;
