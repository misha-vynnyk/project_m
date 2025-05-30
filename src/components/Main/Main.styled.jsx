import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.headerSize.desktopHeight};

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
  padding: 2rem;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.mobileL}) {
    padding: 0.5rem;
    margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "0" : "0")};
    transition: filter 0.3s ease-in-out;
    filter: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "blur(5px)" : "none")};
  }
`;
