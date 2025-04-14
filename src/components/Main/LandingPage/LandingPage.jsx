import { ContainerStyled } from "../../../global_styles/Global";
import LoginPage from "../../LoginPage/LoginPage";
import {
  GetStartedStyled,
  HeroButtonStyled,
  HeroDescriptionStyled,
  HeroSection,
  HeroTitleStyled,
  ImageStyled,
  ImgStyled,
  LandingPageStyled,
} from "./LandingPage.styled";

const LandingPage = () => {
  return (
    <LandingPageStyled>
      <ContainerStyled>
        <LoginPage />
        <HeroSection>
          <GetStartedStyled>
            <HeroTitleStyled>Manage your projects with ease</HeroTitleStyled>
            <HeroDescriptionStyled>
              Functional components to easily create modern UI. Enable date
              tracking to get an overview of project timelines.
            </HeroDescriptionStyled>
            <HeroButtonStyled>Get Started</HeroButtonStyled>
          </GetStartedStyled>
          <ImageStyled>
            <ImgStyled src="./public/image/Hero_img.png" alt="Hero image" />
          </ImageStyled>
        </HeroSection>
      </ContainerStyled>
    </LandingPageStyled>
  );
};

export default LandingPage;
