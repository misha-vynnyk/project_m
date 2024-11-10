import Menu from "../Main/Menu/Menu";
import { SidebarContainer, StyledSidebar } from "./Sidebar.styled";
import PropTypes from "prop-types";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <SidebarContainer $isSidebarOpen={isSidebarOpen}>
      <StyledSidebar>
        <Menu />
      </StyledSidebar>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  onToggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
