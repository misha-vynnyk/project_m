import styled from "styled-components";

export const StyledNoteSidebar = styled.div`
  position: relative;
  display: block;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  border-radius: 16px;
  margin-bottom: 10rem;

  background: ${({ theme }) => theme.colors.secondaryLightBackground};

  h3 {
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;
    margin-bottom: 1rem;
  }

  input {
    width: 10rem;
    height: 3rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    text-align: center;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(icon/lamp_icon.svg);
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    filter: blur(10px);
    background: rgba(252, 214, 74, 0.7);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 2.4rem;
  }
`;
