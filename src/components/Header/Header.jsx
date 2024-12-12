import {
  Logo,
  SidebarOpener,
  SidebarTopWrapper,
} from "../Sidebar/Sidebar.styled";
import { HeaderContainer, HeaderMainWrapper } from "./Header.styled";
import PropTypes from "prop-types";
import { SearchBar } from "./SearchBar/SearchBar";
import { UserBlock } from "./UserBlock/UserBlock";
import { forwardRef } from "react";

const Header = forwardRef(({ onToggleSidebar, isSidebarOpen }, ref) => {
  return (
    <HeaderContainer ref={ref}>
      <SidebarTopWrapper>
        <Logo>
          <img src="logo.svg" alt="Logo" />
          <span>Project M.</span>
        </Logo>

        <SidebarOpener
          className="sidebar-toggle"
          onClick={onToggleSidebar}
          $isSidebarOpen={isSidebarOpen}
        >
          <img src="icon/arrow_left.svg" alt="Sidebar opener" />
        </SidebarOpener>
      </SidebarTopWrapper>

      <HeaderMainWrapper>
        <SearchBar />
        <UserBlock />
      </HeaderMainWrapper>
    </HeaderContainer>
  );
});

Header.displayName = "Header";

Header.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Header;
