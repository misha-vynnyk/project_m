import styled from "styled-components";

export const SidebarTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 14rem;
  border: 20px;
`;

export const SidebarContainer = styled.div`
  border-right: ${({ theme }) => theme.colors.borderLineColor};
  z-index: 99;
  padding: 2rem 1rem;
  width: 16rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryLightBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isSidebarOpen }) =>
    $isSidebarOpen ? "translateX(0)" : "translateX(-100%)"};
`;

export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  border-bottom: ${({ theme }) => theme.colors.borderLineColor};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  span {
    margin-left: 1rem;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
  }
`;

export const SidebarOpener = styled.button`
  z-index: 100;
  top: 0;
  right: 0;
  height: 88px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-right: ${({ $isSidebarOpen }) =>
    $isSidebarOpen ? "1px solid rgb(219, 219, 219)" : "none"};

  transform: ${({ $isSidebarOpen }) =>
    $isSidebarOpen ? "rotate(0deg)" : "rotate(180deg)"};

  transition: transform 0.3s ease-in-out;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
