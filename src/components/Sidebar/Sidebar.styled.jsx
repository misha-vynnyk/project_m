import styled from "styled-components";

export const SidebarTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 14rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    min-width: 10rem;
  }
`;

export const SidebarContainer = styled.div`
  overflow: auto;
  position: fixed;
  border-right: ${({ theme }) => theme.colors.borderLineColor};
  padding: 2rem 1rem;
  width: 16rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primaryLightBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: ${({ $isSidebarOpen }) =>
    $isSidebarOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: ${({ $isSidebarOpen }) =>
      $isSidebarOpen ? "translateX(0)" : "translateX(-100)"};
  }
`;

export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme }) => theme.fonts.primaryFont};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
    }
  }
`;

export const SidebarOpener = styled.button`
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

  @media (max-width: ${({ theme }) => theme.tablet}) {
    border: none;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
