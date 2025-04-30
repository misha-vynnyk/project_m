import PropTypes from "prop-types";
import { CloseButtonStyled, Line } from "./CloseButton.styled";

const CloseButton = ({ onClick }) => {
  return (
    <CloseButtonStyled type="button" onClick={onClick}>
      <Line />
      <Line />
    </CloseButtonStyled>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
