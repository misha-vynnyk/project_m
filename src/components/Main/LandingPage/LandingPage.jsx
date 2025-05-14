import { useContext } from "react";
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
  const { showLoginForm, setShowLoginForm } = useContext(LoginContext);


  const handleOpenLoginForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  return (
    <LandingPageStyled>
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
    </LandingPageStyled>
  );
};

export default LandingPage;
