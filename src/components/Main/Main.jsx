import PropTypes from "prop-types";

import { ContainerStyled } from "../../global_styles/Global";
import Projects from "./ProjectsPage/Projects";
import { MainContent, MainStyled } from "./Main.styled";

const Main = ({ isSidebarOpen }) => {
  return (
    <MainStyled>
      <ContainerStyled>
        <MainContent $isSidebarOpen={isSidebarOpen}>
          <Projects />
        </MainContent>
      </ContainerStyled>
    </MainStyled>
  );
};

Main.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  sidebarRef: PropTypes.any,
};

export default Main;
