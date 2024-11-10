import { Logo, SidebarOpener, SidebarTopWrapper } from "../Sidebar/Sidebar.styled";
import { HeaderContainer } from "./Header.styled";
import PropTypes from "prop-types";

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <HeaderContainer>
      <SidebarTopWrapper>
        <Logo>
          <img src="logo.svg" alt="Logo" />
          <span>Project M.</span>
        </Logo>

        <SidebarOpener onClick={onToggleSidebar} $isSidebarOpen={isSidebarOpen}>
          <img src="icon/arrow_left.svg" alt="Sidebar opener" />
        </SidebarOpener>
      </SidebarTopWrapper>
    </HeaderContainer>
  );
};

Header.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Header;


