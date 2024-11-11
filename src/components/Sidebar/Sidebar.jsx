import Menu from "./Menu/Menu";
import { ProjectList } from "./ProjectList/ProjectList";
import { SidebarContainer, StyledSidebar } from "./Sidebar.styled";
import PropTypes from "prop-types";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <SidebarContainer $isSidebarOpen={isSidebarOpen}>
      <StyledSidebar>
        <Menu />
        <ProjectList />
      </StyledSidebar>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  onToggleSidebar: PropTypes.func,
};

export default Sidebar;
