import { useContext } from "react";
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
import { LoginContext } from "../../../context/LoginContext";

const LandingPage = () => {
  const { showLoginForm, handleOpenLoginForm } = useContext(LoginContext);

  return (
    <LandingPageStyled>
      <ContainerStyled>
        {showLoginForm && <LoginPage />}
        <HeroSection>
          <GetStartedStyled>
            <HeroTitleStyled>Manage your projects with ease</HeroTitleStyled>
            <HeroDescriptionStyled>
              Functional components to easily create modern UI. Enable date
              tracking to get an overview of project timelines.
            </HeroDescriptionStyled>
            <HeroButtonStyled
              onClick={handleOpenLoginForm}
              aria-label="Button for open login form"
              role="Open login form"
            >
              Get Started
            </HeroButtonStyled>
          </GetStartedStyled>
          <ImageStyled>
            <ImgStyled src="image/Hero_img.png" alt="Hero image" />
          </ImageStyled>
        </HeroSection>
      </ContainerStyled>
    </LandingPageStyled>
  );
};

export default LandingPage;
