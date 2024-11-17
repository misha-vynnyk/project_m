import styled from "styled-components";

export const MainStyled = styled.main`
  margin-top: ${({ theme }) => theme.headerSize.desktopHeight};
  height: 100%;
  overflow: hidden;


  section {
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.primaryBlackBackground};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: ${({ theme }) => theme.headerSize.mobileHeight};
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: ${({ theme }) => theme.headerSize.tabletHeight};
  }
`;

export const MainContent = styled.div`
  margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "16rem" : "0")};
  transition: all 0.3s ease-in-out;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "0" : "0")};
    transition: filter 0.3s ease-in-out;
    filter: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "blur(5px)" : "none")};
  }
`;
