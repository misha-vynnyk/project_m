import { CloseButtonStyled, Line } from "./CloseButton.styled";

const CloseButton = ({ onClick }) => {
  return (
    <CloseButtonStyled type="button" onClick={onClick}>
      <Line></Line>
      <Line></Line>
    </CloseButtonStyled>
  );
};

export default CloseButton;
