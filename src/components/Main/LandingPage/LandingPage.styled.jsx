import styled from "styled-components";
import { Button } from "../../LoginPage/LoginPage.styled";

export const LandingPageStyled = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 5.5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 3rem;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  max-width: 1280px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: block;
    text-align: center;
  }
`;

export const GetStartedStyled = styled.div`
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

export const HeroTitleStyled = styled.h1`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 1.1;
`;

export const HeroDescriptionStyled = styled.p`
  margin-bottom: 2rem;
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

export const ImageStyled = styled.div`
`;

export const ImgStyled = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;
