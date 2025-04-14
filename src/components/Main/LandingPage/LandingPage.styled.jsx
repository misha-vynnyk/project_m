import styled from "styled-components";
import { Button } from "../../LoginPage/LoginPage.styled";

export const LandingPageStyled = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 5.5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 50px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 3rem;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: block;
    text-align: center;
  }
`;

export const GetStartedStyled = styled.section`
  max-width: 540px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-bottom: 30px;
  }
`;

export const HeroTitleStyled = styled.h1`
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 1.1;
`;

export const HeroDescriptionStyled = styled.p`
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.5;
`;

export const HeroButtonStyled = styled(Button)`
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.5rem;
  width: 150px;
  background-color: #000000;
`;

export const ImageStyled = styled.section`
  right: 0;
`;

export const ImgStyled = styled.img`
  width: 700px;
  height: 400px;
  border-radius: 0.5rem;
`;
