import styled from "styled-components";

export const CloseButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: grey 50%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const Line = styled.div`
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: rgb(202, 34, 0);
  border-radius: 1px;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`;
