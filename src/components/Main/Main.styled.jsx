import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 5.5rem;

  section {
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.primaryBlackBackground};
  }
`;

export const MainContent = styled.div`
  margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "16rem" : "0")};
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
