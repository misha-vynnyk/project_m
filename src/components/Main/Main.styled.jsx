import styled from "styled-components";

export const MainStyled = styled.main`
  margin-top: ${({ theme }) => theme.headerSize.desktopHeight};

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

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
