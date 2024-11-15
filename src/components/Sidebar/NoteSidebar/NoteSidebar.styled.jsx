import styled from "styled-components";

export const StyledNoteSidebar = styled.div`
  position: relative;
  display: block;
  padding: 2rem 1.2rem 1.2rem;
  border-radius: 16px;
  margin: 0 0.7rem 10rem;

  background: ${({ theme }) => theme.colors.secondaryLightBackground};

  h3 {
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 0.8rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 1rem;
  }

  input {
    width: 10rem;
    height: 3rem;
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    filter: blur(13px);
    background: rgba(252, 214, 74, 0.7);
    background-repeat: no-repeat;
    background-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    background-image: url(icon/lamp_icon.svg);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4.4rem;
    height: 4.4rem;
  }
`;

export const BackgroundLight = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondaryLightBackground};
`
