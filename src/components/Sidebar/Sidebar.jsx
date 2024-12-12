import { forwardRef } from "react";
import Menu from "./Menu/Menu";
import { NoteSidebar } from "./NoteSidebar/NoteSidebar";
import { ProjectList } from "./ProjectList/ProjectList";
import { SidebarContainer, StyledSidebar } from "./Sidebar.styled";
import PropTypes from "prop-types";

const Sidebar = forwardRef(({ isSidebarOpen }, ref) => {
  return (
    <SidebarContainer ref={ref} $isSidebarOpen={isSidebarOpen}>
      <StyledSidebar>
        <Menu />
        <ProjectList />
        <NoteSidebar />
      </StyledSidebar>
    </SidebarContainer>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  onToggleSidebar: PropTypes.func,
  sidebarRef: PropTypes.any,
};

export default Sidebar;
